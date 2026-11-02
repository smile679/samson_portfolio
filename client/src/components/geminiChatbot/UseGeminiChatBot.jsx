import { useState, useRef } from 'react';
import aboutMe from './aboutMe';

export default function useGeminiChat() {
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', content: 'Hello — Ask me about Samson and his projects!' }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef(null);


  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      if (messagesRef.current) {
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
      }
    });
  };

  function buildPromptFromMessages(historyMessages, userText) {
    const system = `System: You are the portfolio assistant for Samson Gidey. Use the aboutMe JSON to answer accurately.\naboutMe: ${JSON.stringify(
      aboutMe
    )}\n\n`;
    const historyText = historyMessages
      .map((m) => `${m.role.toUpperCase()}: ${m.content}`)
      .join('\n');
    const userLine = `USER: ${userText}`;
    return `${system}${historyText}\n${userLine}\nASSISTANT:`;
  }

  async function sendMessage(userText) {
    if (!userText) return;

    const userMsg = { id: Date.now(), role: 'user', content: userText };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);
    scrollToBottom();

    const prompt = buildPromptFromMessages(messages, userText);

    try {
      const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
      if (!API_KEY) {
        throw new Error('Missing Gemini API key. Set VITE_GEMINI_API_KEY in .env');
      }

      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

      const body = {
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      };

      const resp = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      if (!resp.ok) {
        const errText = await resp.text();
        throw new Error(`Gemini API error: ${resp.status} ${errText}`);
      }

      const json = await resp.json();

      const assistantReply =
        json?.candidates?.[0]?.content?.parts?.[0]?.text ||
        json?.candidates?.[0]?.content ||
        'No response received.';

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: 'assistant', content: assistantReply }
      ]);
    } catch (err) {
      console.error('sendMessage error:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          role: 'assistant',
          content: 'Something is wrong.Try again later'
        }
      ]);
    } finally {
      setLoading(false);
      scrollToBottom();
    }
  }

  return { messages, loading, messagesRef, sendMessage };
}
import { useState, useRef } from 'react';

export default function useGeminiChat() {
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', content: 'Hello — Ask me about Samson and his projects!' }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef(null);

 const aboutMe = {
  name: "Samson Gidey",
  title: "Fullstack Developer (MERN) & Graphics Designer",
  
  bio: `I am a passionate full-stack developer who builds modern, responsive, and 
  visually appealing web applications using the MERN stack. I specialize in 
  building user-friendly interfaces, powerful API backends, state management with Redux Toolkit, 
  authentication systems, and complete e-commerce workflows. I also bring a strong background in 
  graphics design, which helps me create polished UI and consistent brand visuals.`,

  skills: {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Responsive UI Design",
      "Component Architecture"
    ],
    backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Authentication",
      "Role-Based Authorization"
    ],
    tools: [
      "Git & GitHub",
      "Postman",
      "Render",
      "Cloudinary",
      "Figma",
      "Adobe Photoshop"
    ]
  },

  experience: [
    {
      company: "Freelance / Personal Projects",
      role: "Fullstack Developer",
      description:
        "Built multiple end-to-end web applications handling frontend UI, backend development, API creation, secure authentication, and database architecture."
    }
  ],

  projects: [
    {
      name: "Merkato Ecommerce Fullstack App",
      description:
        "A complete MERN e-commerce platform featuring product management, cart system, checkout flow, admin dashboard, authentication, and secure user roles.",
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Tailwind CSS"]
    },
    {
      name: "Foodie Delight",
      description:
        "A visually designed food exploration app allowing users to browse dishes, view details, and explore categories with a modern UI.",
      technologies: ["React", "CSS", "API Integration"]
    },
    {
      name: "Movie Scope",
      description:
        "A movie discovery web app that lets users search movies, view details, and explore genres using a clean and responsive UI.",
      technologies: ["React", "REST API"]
    },
    {
      name: "Bakery Fullstack App",
      description:
        "A full MERN-based bakery e-commerce application with admin panel, order system, authentication, and beautifully designed sections such as hero, about, services, and featured products.",
      technologies: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Tailwind CSS"]
    }
  ],

  strengths: [
    "Fast learner",
    "Pixel-perfect UI design",
    "Clean and scalable code",
    "Strong problem-solving skills",
    "Ability to handle both frontend and backend",
    "Professional design sense"
  ],

  contact: {
    email: "samsongidey9@gmail.com",
    phone: "+251943712048 or +251939663378",
    github: "https://github.com/smile679",
    linkedin : "https://www.linkedin.com/m/in/samson-gidey-b5a905303",
  }
};


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

      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

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
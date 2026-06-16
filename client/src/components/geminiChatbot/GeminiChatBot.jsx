// src/components/GeminiChatbot/GeminiChatbot.jsx
import { useState } from "react";
import useGeminiChat from "./UseGeminiChatBot";
import TypeIt from "typeit-react";

export default function GeminiChatbot() {
  const { messages, loading, messagesRef, sendMessage } = useGeminiChat();
  const [input, setInput] = useState("");
  const [icon, setIcon] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    sendMessage(trimmed);
    setInput("");
  }

  return (
    <div className="w-full max-w-sm flex flex-col fixed bottom-5 right-2 sm:right-5 pl-5">
      <div
        className={
          icon
            ? " bg-emerald-800 rounded-2xl p-4 shadow-lg border border-white z-400"
            : "hidden"
        }
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-3">AI Portfolio Assistant</h2>
          <button
            onClick={() => setIcon(false)}
            className="text-lg text-white font-bold hover:scale-110 cursor-pointer"
          >
            X
          </button>
        </div>
        <div
          ref={messagesRef}
          className="h-full max-h-60 overflow-y-scroll [scrollbar-width:none] p-3 space-y-3 bg-black/40 rounded-lg mb-3"
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={m.role === "user" ? "text-right" : "text-left"}
            >
              <div
                className={`w-full inline-block px-4 py-2 rounded-xl overflow-hidden ${
                  m.role === "user"
                    ? "bg-amber-500/20 max-w-1/2"
                    : "bg-white/10 max-w-3/4"
                }`}
              >
                <p className="text-[12px] sm:text-sm text-white sm:leading-6 whitespace-pre-wrap text-pretty text-start">
                  <TypeIt
                    options={{
                      speed: 50,
                      waitUntilVisible: true,
                      cursor: false,
                    }}
                  >
                    {m.content}
                  </TypeIt>
                </p>
              </div>
            </div>
          ))}
          {loading && (
            <p className="text-sm text-gray-200 animate-pulse pl-2">
              <TypeIt
                options={{
                  speed: 50,
                  waitUntilVisible: true,
                  cursor: false,
                }}
              >
                thinking...
              </TypeIt>
            </p>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 flex-nowrap"
        >
          <input
            className="flex-1 min-w-0 text-white text-sm bg-transparent border border-white/50 rounded-xl px-3 py-2 focus:outline-none"
            placeholder="Ask about Samson, skills, or projects..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="px-4 py-2 rounded-xl bg-emerald-500"
            type="submit"
            disabled={loading}
          >
            Send
          </button>
        </form>
      </div>
      <div
        className="flex flex-col justify-center items-center self-end hover:cursor-pointer animate-puls"
        onClick={() => setIcon(true)}
      >
        <img
          src="https://res.cloudinary.com/dineyc77u/image/upload/v1764242628/pngwing.com_2_fx9yds.png"
          alt="Ai icon"
          className={`${
            icon ? "w-10 self-end" : "w-10"
          } sm:w-20 md:w-25 lg:w-20 drop-shadow-emerald-950 drop-shadow-xl hover:scale-110`}
        />
        <h3
          className={`${
            icon
              ? "hidden"
              : "flex text-sm text-center text-shadow-emerald-950 text-shadow-md"
          }`}
        >
          {" "}
          Talk With <br />
          Sami Ai!
        </h3>
      </div>
    </div>
  );
}
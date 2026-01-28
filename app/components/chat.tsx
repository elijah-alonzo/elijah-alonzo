"use client";

import { useState } from "react";

export default function Chat() {
  const [chatHistory, setChatHistory] = useState<{ sender: string; text: string }[]>([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!question.trim()) return;
    setLoading(true);
    setError(null);
    setChatHistory(prev => [...prev, { sender: "user", text: question }]);
    setQuestion("");
    try {
      const res = await fetch("/api/rag", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question })
      });
      if (!res.ok) throw new Error("Failed to get response");
      const data = await res.json();
      setChatHistory(prev => [...prev, { sender: "elijah", text: data.answer || "(No answer)" }]);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {chatHistory.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            <div className="mb-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 mx-auto flex items-center justify-center mb-3">
                <img src="/profile.png" alt="Elijah" className="w-12 h-12 rounded-full object-cover" />
              </div>
            </div>
            <p className="text-sm">Hi! I'm Elijah's digital twin. Ask me anything about his background, skills, or experience!</p>
          </div>
        )}
        {chatHistory.map((msg, i) => (
          <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} items-end gap-2`}>
            {msg.sender === "elijah" && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0 mb-1">
                <img src="/profile.png" alt="Elijah" className="w-6 h-6 rounded-full object-cover" />
              </div>
            )}
            <div
              className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm shadow-lg
                ${msg.sender === "user"
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-br-md"
                  : "bg-white border border-blue-200 text-gray-800 rounded-bl-md"}
              `}
            >
              {msg.sender === "elijah" && <span className="font-semibold text-blue-600 block mb-1">Elijah</span>}
              <div className="leading-relaxed">{msg.text}</div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start items-end gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mb-1">
              <img src="/profile.png" alt="Elijah" className="w-6 h-6 rounded-full object-cover" />
            </div>
            <div className="max-w-[75%] px-4 py-3 rounded-2xl text-sm shadow-lg bg-white border border-blue-200 text-gray-800 rounded-bl-md">
              <span className="font-semibold text-blue-600 block mb-1">Elijah</span>
              <div className="flex items-center gap-1">
                <span>Thinking</span>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="p-4 border-t border-blue-200 bg-gradient-to-r from-blue-50 to-white">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="text"
            className="flex-1 rounded-lg border border-blue-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            placeholder="Ask me anything..."
            value={question}
            onChange={e => setQuestion(e.target.value)}
            required
            autoFocus
            disabled={loading}
          />
          <button
            type="submit"
            className="rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 font-semibold transition transform hover:scale-105 disabled:opacity-50 disabled:transform-none shadow-lg"
            disabled={loading}
          >
            Send
          </button>
        </form>
        {error && (
          <div className="mt-3 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
            <span className="font-medium">Error:</span> {error}
          </div>
        )}
      </div>
    </div>
  );
}

"use client";
import { useState, useRef } from "react";
import { pipeline } from "@xenova/transformers";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import ChatMessage from "@/components/ChatMessage";

export default function Home() {
  const [messages, setMessages] = useState<{ sender: "You" | "Bot"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const generatorRef = useRef<any>(null);

  async function loadGenerator() {
    if (!generatorRef.current) {
      generatorRef.current = await pipeline("text-generation", "Xenova/distilgpt2");
    }
    return generatorRef.current;
  }

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "You" as const, text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const history = [...messages, userMessage]
      .map((m) => `${m.sender}: ${m.text}`)
      .join("\n");

    const generator = await loadGenerator();
    const response = await generator(history, { max_new_tokens: 60 });

    const botMessage = {
      sender: "Bot" as const,
      text: response[0].generated_text.replace(history, "").trim(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-2xl flex flex-col bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-xl">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto max-h-[60vh] space-y-3 mb-4">
        {messages.map((msg, i) => (
          <ChatMessage key={i} sender={msg.sender} text={msg.text} />
        ))}
        {loading && <p className="text-gray-400 text-sm">🤔 Bot is thinking...</p>}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..."
        />
        <Button onClick={sendMessage} disabled={loading}>
          Send
        </Button>
      </div>
    </div>
  );
}

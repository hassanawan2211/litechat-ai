"use client";
import { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import LoadingIndicator from "./LoadingIndicator";
import ChatInput from "./ChatInput";

interface Message {
  sender: "You" | "Bot";
  text: string;
}

const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "Bot", text: "Hello! I'm your AI assistant. How can I help you today?" }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getFallbackResponse = (userMessage: string) => {
    const responses = [
      "I understand you're saying: " + userMessage,
      "That's interesting! Tell me more about that.",
      "I'm still learning, but I find that fascinating.",
      "Thanks for sharing that with me.",
      "Could you elaborate on that point?",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const sendMessage = async (input: string) => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "You", text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setError(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const botResponse = getFallbackResponse(input);
      const botMessage: Message = { sender: "Bot", text: botResponse };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setError("Sorry, I'm having trouble responding right now. Please try again.");
      const botMessage: Message = { sender: "Bot", text: getFallbackResponse(input) };
      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden">
      <div className="p-6">
        <div className="space-y-4 mb-6 max-h-[60vh] overflow-y-auto pr-2">
          {messages.map((msg, i) => (
            <ChatMessage key={i} sender={msg.sender} text={msg.text} />
          ))}
          {loading && <LoadingIndicator />}
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <ChatInput onSendMessage={sendMessage} disabled={loading} />
      </div>
    </div>
  );
};

export default ChatContainer;
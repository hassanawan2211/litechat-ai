"use client";
import { useState } from "react";
import { Button, Input } from "./ui";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSendMessage, disabled = false }: ChatInputProps) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() && !disabled) {
      onSendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="flex gap-3">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && !disabled && handleSend()}
        placeholder="Type your message here..."
        disabled={disabled}
        className="flex-1"
      />
      <Button
        onClick={handleSend} 
        disabled={disabled || !input.trim()}
        className="px-6"
      >
        Send
      </Button>
    </div>
  );
};

export default ChatInput;
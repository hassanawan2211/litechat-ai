"use client";
import classNames from "classnames";

interface ChatBubbleProps {
  sender: "You" | "Bot";
  text: string;
}

export default function ChatBubble({ sender, text }: ChatBubbleProps) {
  return (
    <div
      className={classNames(
        "max-w-xs p-3 rounded-lg",
        sender === "You"
          ? "bg-blue-600 text-white self-end ml-auto text-right"
          : "bg-gray-700 text-white self-start mr-auto"
      )}
    >
      <strong>{sender}: </strong>
      {text}
    </div>
  );
}

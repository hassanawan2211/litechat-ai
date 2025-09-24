"use client";

export default function ChatMessage({
  sender,
  text,
}: {
  sender: "You" | "Bot";
  text: string;
}) {
  const isUser = sender === "You";
  return (
    <div
      className={`p-3 rounded-lg text-sm max-w-[80%] shadow-md ${
        isUser
          ? "ml-auto bg-blue-600 text-white"
          : "mr-auto bg-gray-700 text-gray-100"
      }`}
    >
      <span className="font-semibold">{sender}: </span>
      {text}
    </div>
  );
}

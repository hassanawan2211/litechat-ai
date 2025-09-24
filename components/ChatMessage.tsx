interface ChatMessageProps {
  sender: "You" | "Bot";
  text: string;
}

const ChatMessage = ({ sender, text }: ChatMessageProps) => {
  const isUser = sender === "You";
  
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`flex items-start space-x-3 max-w-[80%] ${isUser ? "flex-row-reverse space-x-reverse" : ""}`}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          isUser 
            ? "bg-blue-500/20 text-blue-300" 
            : "bg-purple-500/20 text-purple-300"
        }`}>
          {isUser ? "👤" : "🤖"}
        </div>
        <div className={`rounded-2xl px-4 py-2 ${
          isUser
            ? "bg-blue-500/20 border border-blue-500/30"
            : "bg-gray-700/50 border border-gray-600/30"
        }`}>
          <p className="text-sm text-white">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
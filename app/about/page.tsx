import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex flex-col">
      <div className="text-center pt-12 pb-6">
        <h1 className="text-4xl font-bold text-gray-100">About LiteChat AI</h1>
      </div>
      <section className="flex-1 flex items-center justify-center px-4 pb-12">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-transparent">
          {/* Left: Text */}
          <div className="flex flex-col justify-center">
            <p className="text-lg text-gray-300 mb-4">
              LiteChat AI is a lightweight, privacy-focused chatbot built with Next.js and Transformers.js.
              Our mission is to provide instant, reliable AI chat experiences for everyone.
            </p>
            <p className="text-md text-gray-400">
              This project is open source and welcomes contributions from the community. Explore our features,
              chat, and help us improve LiteChat AI!
            </p>
          </div>
          {/* Right: Image */}
          <div className="flex items-center justify-center">
            <Image
              src="/AI.jpg"
              alt="AI illustration"
              width={350}
              height={350}
              className="rounded-xl shadow-lg object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="p-4 bg-gray-800 border-b border-gray-700">
        <h1 className="text-xl font-bold">LiteChat AI 🤖</h1>
      </header>
      <main className="flex-1 p-4 flex flex-col items-center">{children}</main>
      <footer className="p-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} LiteChat AI
      </footer>
    </div>
  );
}

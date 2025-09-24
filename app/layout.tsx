import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LiteChat AI",
  description: "Free lightweight AI chatbot built with Next.js + Transformers.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-gray-100 min-h-screen flex flex-col`}
      >
        <header className="w-full border-b border-gray-800 p-4 flex justify-between items-center bg-gray-900">
          <h1 className="text-lg font-bold tracking-wide">🤖 LiteChat AI</h1>
          <nav className="text-sm space-x-4">
            <a
              href="/"
              className="hover:underline underline-offset-4 text-gray-300 hover:text-white"
            >
              Home
            </a>
            <a
              href="/about"
              className="hover:underline underline-offset-4 text-gray-300 hover:text-white"
            >
              About
            </a>
            <a
              href="https://github.com/your-repo"
              target="_blank"
              className="hover:underline underline-offset-4 text-gray-300 hover:text-white"
            >
              GitHub
            </a>
          </nav>
        </header>

        <main className="flex-1 flex items-center justify-center p-6">
          {children}
        </main>

        <footer className="w-full border-t border-gray-800 p-4 text-center text-xs text-gray-400">
          Built with ❤️ using Next.js & Transformers.js
        </footer>
      </body>
    </html>
  );
}

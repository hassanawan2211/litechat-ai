"use client";
import { ReactNode } from "react";
import classNames from "classnames";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={classNames(
        "bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}

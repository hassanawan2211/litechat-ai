"use client";
import { InputHTMLAttributes } from "react";
import classNames from "classnames";

export default function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={classNames(
        "flex-1 rounded-lg bg-gray-800 border border-gray-700",
        "px-3 py-2 text-sm text-gray-100 placeholder-gray-400",
        "focus:outline-none focus:ring-2 focus:ring-blue-500",
        className
      )}
    />
  );
}

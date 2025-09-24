"use client";
import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

export default function Button({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={classNames(
        "px-4 py-2 rounded-lg font-medium text-sm transition-colors",
        "bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50",
        className
      )}
    >
      {children}
    </button>
  );
}

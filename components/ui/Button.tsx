import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "bg-amber-500 text-white hover:bg-amber-600",

    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",

    ghost:
      "text-slate-700 hover:bg-slate-100",
  };

  return (
    <button
      className={cn(
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer",
    variants[variant],
    className
  )}
  {...props}
>
  {children}
</button>
  );
}
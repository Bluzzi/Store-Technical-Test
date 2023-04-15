import { ButtonHTMLAttributes, ReactElement } from "react";
import { clsx } from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
};

export function Button({ variant = "primary", children, className, ...props }: ButtonProps): ReactElement {
  const styles = clsx(
    "text-white rounded py-2 px-5",
    {
      "bg-gray-800 hover:bg-gray-900": variant === "primary",
      "bg-gray-500 hover:bg-gray-600": variant === "secondary",
      "bg-red-800 hover:bg-red-900": variant === "danger"
    },
    className
  );

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
import { ButtonHTMLAttributes, ReactElement } from "react";
import { clsx } from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...props }: ButtonProps): ReactElement {
  return (
    <button className={clsx("bg-gray-800 hover:bg-gray-900 text-white rounded py-2 px-5", className)} {...props}>
      {children}
    </button>
  );
}
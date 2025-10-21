import "./Button.css"

import { type ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    variant?: "primary" | "secondry";
    className?: string;

};

export default function Button({
    children,
    onClick,
    disabled = false,
    variant  = "primary",
    className = "",
}: ButtonProps){
  return(
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className={`button ${variant} ${className}`}>
        {children}
    </button>
  ); 
}
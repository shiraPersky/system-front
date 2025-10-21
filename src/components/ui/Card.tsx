import "./Card.css"

import { type ReactNode } from "react";

import Button from "./Button";

type cardProps = {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: "default" | "outlined" | "elevated";
};

export default function Card({
    children,
    onClick,
    className ="",
    variant  = "default",
}: cardProps){
  return(
    <Button 
      className={`card ${variant} ${className}`}
      onClick={onClick}
    >
        {children}
    </Button>
  ); 
}
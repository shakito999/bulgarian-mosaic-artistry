import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, icon = false, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-semibold tracking-wide transition-all duration-300 border-2";
  
  const variants = {
    primary: "border-stone-900 bg-stone-900 text-white hover:bg-stone-800 hover:border-stone-800",
    outline: "border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white",
    white: "border-white text-white hover:bg-white hover:text-stone-900",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};
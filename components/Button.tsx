
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

  const variants = {
    primary: "bg-primary text-white rounded-xl hover:brightness-110 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-[2px]",
    outline: "border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white",
    secondary: "bg-accent-brown text-white rounded-2xl hover:scale-105 shadow-xl",
    ghost: "text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-black/5 dark:hover:bg-white/5 rounded-xl",
  };

  const sizes = {
    sm: "px-6 py-2.5 text-sm rounded-full",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

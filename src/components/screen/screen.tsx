import React from "react";

interface ScreenProps {
  children: React.ReactNode;
  className?: string;
}

export const Screen = ({ children, className = "" }: ScreenProps) => {
  return (
    <div
      className={`flex flex-col justify-center items-center h-full w-full p-2 ${className}`}
    >
      {children}
    </div>
  );
};

"use client";

interface ButtonProps {
  text: string;
  type: ButtonTypes;
  size: ButtonSizes;
  onClick: () => void;
  className?: string;
}

export enum ButtonTypes {
  primary,
  secondary,
  tertiary,
}
export enum ButtonSizes {
  small,
  medium,
  large,
}

export const Button = ({
  text,
  type,
  size,
  className = "",
  onClick,
}: ButtonProps) => {
  const getStyles = () => {
    const typeStyles: Record<ButtonTypes, string> = {
      [ButtonTypes.primary]: "bg-blue-400 hover:bg-blue-700",
      [ButtonTypes.secondary]:
        "bg-transparent border-2 border-blue-800 hover:bg-blue-200/[.20] text-black dark:text-blue-100",
      [ButtonTypes.tertiary]:
        "bg-transparent text-blue-400 hover:text-blue-100",
    };
    const sizeStyles: Record<ButtonSizes, string> = {
      [ButtonSizes.small]: "px-4 py-1 text-sm w-30",
      [ButtonSizes.medium]: "px-6  py-2 text-lg w-40",
      [ButtonSizes.large]: "px-8 py-3 text-2xl w-40",
    };
    return ` ${typeStyles[type]} ${sizeStyles[size]}`;
  };
  return (
    <button
      onClick={onClick}
      className={"rounded-xl cursor-pointer" + className + getStyles()}
    >
      {text}
    </button>
  );
};

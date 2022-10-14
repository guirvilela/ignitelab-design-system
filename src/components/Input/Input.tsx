import React, { InputHTMLAttributes } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface InputRootProps {
  children: React.ReactNode;
}

const InputRoot = ({ children }: InputRootProps) => {
  return (
    <div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800  w-full focus-within:ring-2 ring-cyan-300 ">
      {children}
    </div>
  );
};

const InputInput = (props: InputProps) => {
  return (
    <input
      {...props}
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
    />
  );
};

export interface InputIconProps {
  children: React.ReactNode;
}

const InputIcon = ({ children }: InputIconProps) => {
  return <Slot className="w-6 h-6  text-gray-400">{children}</Slot>;
};

InputRoot.displayName = "Input.Root";
InputInput.displayName = "Input.Input";
InputIcon.displayName = "Input.Icon";

export const Input = {
  Root: InputRoot,
  Input: InputInput,
  Icon: InputIcon,
};

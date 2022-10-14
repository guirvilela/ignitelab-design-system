import React from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export const Button = ({ asChild, children }: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "text-black font-sans font-semibold bg-cyan-500 py-4 px-3 rounded text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white"
      )}
    >
      {children}
    </Comp>
  );
};

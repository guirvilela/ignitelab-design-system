import { Meta, StoryObj } from "@storybook/react";
import { Header, HeaderProps } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  args: {
    children: "Loren ipsum.",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
    asChild: {
      table: {
        disabled: true,
      },
    },
  },
} as Meta<HeaderProps>;

export const Default: StoryObj<HeaderProps> = {};

export const Small: StoryObj<HeaderProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<HeaderProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponet: StoryObj<HeaderProps> = {
  args: {
    asChild: true,
    children: <h1>Text with H1</h1>,
  },

  argTypes: {
    children: {
      control: {
        disabled: true,
      },
    },
  },
};

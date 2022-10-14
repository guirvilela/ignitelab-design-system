import { Meta, StoryObj } from "@storybook/react";
import { Input, InputRootProps } from "./Input";

import { Envelope } from "phosphor-react";

export default {
  title: "Components/Input",
  component: Input.Root,
  args: {
    children: [
      <Input.Icon>
        <Envelope />
      </Input.Icon>,
      <Input.Input placeholder="Type your e-mail address" />,
    ],
  },
  argTypes: {
    children: {
      disabled: true,
    },
  },
} as Meta<InputRootProps>;

export const Default: StoryObj<InputRootProps> = {};

export const WhitoutIcon: StoryObj<InputRootProps> = {
  args: {
    children: [<Input.Input placeholder="Type your e-mail address" />],
  },
};

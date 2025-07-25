import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";

import { Button } from "@/components/Button";

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    color: {
      options: ["primary", "danger", "success", "warning", "info", "default"],
      control: {
        type: "select",
      },
    },
    outline: {
      options: [true, false],
      control: {
        type: "boolean",
      },
    },
    borderRadius: {
      control: {
        type: "number",
      },
    },
  },
};
export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    buttonText: "Primary",
    color: "primary",
    outline: false,
    borderRadius: 4,
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};

export const Danger: Story = {
  args: {
    buttonText: "Danger",
    color: "danger",
    outline: false,
    borderRadius: 4,
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};

export const Success: Story = {
  args: {
    buttonText: "Success",
    color: "success",
    outline: false,
    borderRadius: 4,
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};

export const Warning: Story = {
  args: {
    buttonText: "Warning",
    color: "warning",
    outline: false,
    borderRadius: 4,
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};

export const Info: Story = {
  args: {
    buttonText: "Info",
    color: "info",
    outline: false,
    borderRadius: 4,
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};

export const Default: Story = {
  args: {
    buttonText: "Default",
    color: "default",
    outline: false,
    borderRadius: 4,
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};

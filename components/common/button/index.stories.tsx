import { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const sotryMeta: Meta = {
  title: "Components/UI/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "default",
          "destructive",
          "outline",
          "secondary",
          "ghost",
          "link",
        ],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
  },
};

export default sotryMeta;

type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
  args: {
    variant: "default",
    children: "default",
  },
};

export const DestructiveButton: Story = {
  args: {
    variant: "destructive",
    children: "destructive",
  },
};

export const OutlineButton: Story = {
  args: {
    variant: "outline",
    children: "outline",
  },
};

export const SecondaryButton: Story = {
  args: {
    variant: "secondary",
    children: "secondary",
  },
};

export const GhostButton: Story = {
  args: {
    variant: "ghost",
    children: "ghost",
  },
};

export const LinkButton: Story = {
  args: {
    variant: "link",
    children: "link",
  },
};

export const SmallButton: Story = {
  args: {
    size: "sm",
    children: "small",
  },
};

export const LargeButton: Story = {
  args: {
    size: "lg",
    children: "large",
  },
};

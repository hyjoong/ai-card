import { Meta, StoryObj } from "@storybook/react";
import { DropdownMenu } from ".";

const sotryMeta: Meta = {
  title: "Components/UI/DropdownMenu",
  component: DropdownMenu,
  argTypes: {
    open: {
      control: {
        type: "boolean",
      },
    },
    modal: {
      control: {
        type: "boolean",
      },
    },
    defaultOpen: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default sotryMeta;

type Story = StoryObj<typeof DropdownMenu>;

export const DefaultDropdownMenu: Story = {
  args: {
    children: "default",
  },
};

export const ModalDropdownMenu: Story = {
  args: {
    modal: true,
    children: "modal",
  },
};

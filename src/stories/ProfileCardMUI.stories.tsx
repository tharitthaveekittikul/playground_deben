import { Meta, StoryObj } from "@storybook/react";
import ProfileCardMUI from "../components/ProfileCardMUI";

const meta: Meta<typeof ProfileCardMUI> = {
  title: "Example/MUI Profile Card",
  component: ProfileCardMUI,
  argTypes: {
    name: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof ProfileCardMUI>;

export const DefaultProfileCard: Story = {
  args: {
    name: "John",
  },
};

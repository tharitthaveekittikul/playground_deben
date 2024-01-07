import { Meta, StoryObj } from "@storybook/react";
import ProfileCard from "../components/ProfileCard";

const meta: Meta<typeof ProfileCard> = {
  title: "Example/AntD Profile Card",
  component: ProfileCard,
  argTypes: {
    name: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const DefaultProfileCard: Story = {
  args: {
    name: "John",
  },
};

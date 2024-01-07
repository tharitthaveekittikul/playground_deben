import { Meta, StoryObj } from "@storybook/react";
import ModalComponent from "../components/ModalComponent";

const meta: Meta<typeof ModalComponent> = {
  title: "Example/Alert",
  component: ModalComponent,
  argTypes: {
    message: { control: "text" },
    description: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof ModalComponent>;

export const DefaultAlert: Story = {
  args: {
    message: "Coupon code has expired",
    description: "Information not available, please try again later.",
  },
};

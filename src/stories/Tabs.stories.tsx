import { Meta, StoryObj } from "@storybook/react";
import TabComponent from "../components/TabComponent";

const meta: Meta<typeof TabComponent> = {
  title: "Example/AntD Tabs",
  component: TabComponent,
  argTypes: {
    tabs: {
      control: { type: "object" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TabComponent>;

export const StringContentTabs: Story = {
  args: {
    tabs: [
      {
        title: "Description",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        key: "1",
      },
      {
        title: "Condition",
        content:
          "Lorem ipsum dolor 2 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        key: "2",
      },
    ],
  },
};

export const ObjectContentTabs: Story = {
  args: {
    tabs: [
      {
        title: "ENABLE",
        content: [
          {
            imageSrc: "https://via.placeholder.com/150",
            couponName: "Coupon A",
            idCoupon: "123",
            description: "Description of Coupon A",
          },
        ],
        key: "1",
      },
      {
        title: "USED",
        content: [
          {
            imageSrc: "https://via.placeholder.com/150",
            couponName: "Coupon B",
            idCoupon: "456",
            description: "Description of Coupon B",
          },
        ],
        key: "2",
      },
      {
        title: "EXIRED",
        content: [
          {
            imageSrc: "https://via.placeholder.com/150",
            couponName: "Coupon B",
            idCoupon: "456",
            description: "Description of Coupon B",
          },
        ],
        key: "3",
      },
    ],
  },
};

export const MixedContentTabs: Story = {
  args: {
    tabs: [
      {
        title: "Tab 1",
        content: "Content 1",
        key: "1",
      },
      {
        title: "Tab 2",
        content: [
          {
            imageSrc: "https://via.placeholder.com/150",
            couponName: "Coupon B",
            idCoupon: "456",
            description: "Description of Coupon B",
          },
        ],
        key: "2",
      },
    ],
  },
};

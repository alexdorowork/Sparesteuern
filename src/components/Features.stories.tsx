import type { Meta, StoryObj } from "@storybook/react";
import Features from "~/components/Features";

const meta = {
  title: "Components/Features",
  component: Features,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Features>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
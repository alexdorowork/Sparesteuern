import type { Meta, StoryObj } from "@storybook/react";
import CTA from "~/components/CTA";

const meta = {
  title: "Components/CTA",
  component: CTA,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CTA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
import type { Meta, StoryObj } from "@storybook/react";
import Hero from "~/components/Hero";

const meta = {
  title: "Components/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithPlaceholderImage: Story = {
  args: {
    backgroundImage: "https://via.placeholder.com/1024x768",
  },
};
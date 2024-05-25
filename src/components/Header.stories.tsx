import type { Meta, StoryObj } from "@storybook/react";
import Header from "~/components/Header";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomImages: Story = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  decorators: [
    (Story) => (
      <div className="flex justify-between items-center w-full h-12 max-w-7xl mx-auto">
        <div className="flex items-center">
          <div className="flex items-center w-6 h-8">
            <img src="https://via.placeholder.com/12x12" alt="Vector 1" className="h-3" />
            <img src="https://via.placeholder.com/12x12" alt="Vector 2" className="h-1.5 ml-1.5" />
            <img src="https://via.placeholder.com/12x12" alt="Vector 3" className="h-3 mt-1.5" />
          </div>
          <span className="text-xl uppercase text-primary ml-3">Spare Steuern</span>
        </div>
        <button
          className="w-96 h-12 bg-secondary rounded flex justify-center items-center"
          onClick={() => console.log('Button clicked')}
        >
          <span className="text-sm font-bold tracking-wider text-accent">JETZT KOSTENFREIE ANALYSE ANFORDERN</span>
        </button>
      </div>
    ),
  ],
};

import type { Meta, StoryObj } from "@storybook/react";
import Reviews from "~/components/Reviews";

const meta = {
  title: "Components/Reviews",
  component: Reviews,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Reviews>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDifferentProfile: Story = {
  render: () => (
    <div className="w-full h-screen bg-[#2f6ba2] flex flex-col items-center">
      <div className="text-white text-center text-4xl font-bold mt-24">
        Testimonials
      </div>
      <div className="w-full max-w-5xl h-[420px] bg-[#0b2339] rounded-md mt-12 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-7 h-5 bg-[#2f6ba2]"></div>
        <div className="text-white text-center text-lg mx-16 mt-20">
          Ich bin seit meinem 20. Lebensjahr Unternehmer im Bereich Amazon-Dropshipping und berate hierbei auch andere Unternehmer und habe mit 4 Steuerkanzleien gearbeitet. Die letzte Kanzlei (Raum Stuttgart) war gut und hat meine Steuerlast tatsächlich reduziert durch ein Modell mit einer Holding. Seit ich jedoch im Januar mit „Spare Steuern“ arbeite, habe ich ein neues Modell welches es mir ermöglicht meine Abgabenlast auf ein Minimum zu reduzieren. Ich kann dieses Modell nur empfehlen. Es lohnt sich!
        </div>
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-15 h-15 bg-[#06192a] rounded-md flex items-center justify-center cursor-pointer">
          <FontAwesomeIcon icon={faArrowLeft} className="w-6 h-5 text-white" />
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-15 h-15 bg-[#06192a] rounded-md flex items-center justify-center cursor-pointer">
          <FontAwesomeIcon icon={faArrowRight} className="w-6 h-5 text-white" />
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center">
          <div className="w-3 h-3 bg-white rounded-full mx-1"></div>
          <div className="w-3 h-3 border-2 border-solid border-white rounded-full mx-1"></div>
          <div className="w-3 h-3 border-2 border-solid border-white rounded-full mx-1"></div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center">
          <img src="https://via.placeholder.com/60" alt="Profile" className="w-15 h-15 rounded-full" />
          <div className="text-white text-lg font-medium uppercase ml-4">
            John Doe
          </div>
        </div>
      </div>
    </div>
  ),
};
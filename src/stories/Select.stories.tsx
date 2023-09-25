import type { Meta, StoryObj } from "@storybook/react";
import { ReactNode, useState } from "react";
import { Select } from "../components/Select";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";
import { Tooltip } from "..";

const meta: Meta<typeof Select> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Select",
  component: Select
};

export default meta;

type Story = StoryObj<typeof Select>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => {
    return (
      <Select
        value={"alice"}
        selectItems={[
          { label: "Alice", value: "alice" },
          { label: "Bob", value: "bob" }
        ]}
        wrapper={(children: ReactNode) => {
          return (
            <Tooltip placement="top" content="111">
              {children}
            </Tooltip>
          );
        }}
      />
    );
  }
};

export const Controlled: Story = {
  render: () => {
    const mode = useMode();
    const [selectedValue, setSelectedValue] = useState("gtc");
    return (
      <ThemeProvider value={{ theme: mode }}>
        <div className="eui-flex">
          <div className="eui-flex eui-h-[24px] eui-w-full eui-flex-col eui-gap-4">
            <label htmlFor="select">{selectedValue}</label>
            <Select
              selectItems={[
                { label: "Good Till Cancel", value: "gtc" },
                { label: "Bob", value: "bob" }
              ]}
              value={selectedValue}
              handleChange={(value) => setSelectedValue(value)}
            />
          </div>
          <div className="eui-flex eui-h-[24px] eui-w-full eui-flex-col eui-gap-4">
            <label htmlFor="select">{selectedValue}</label>
            <Select
              align="right"
              selectItems={[
                { label: "gtc", value: "gtc" },
                { label: "Bob", value: "bob" }
              ]}
              value={selectedValue}
              handleChange={(value) => setSelectedValue(value)}
            />
          </div>
        </div>
      </ThemeProvider>
    );
  }
};

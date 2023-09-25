import { Meta } from "@storybook/react";
import { Dropdown } from "../components/Dropdown/Dropdown";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    menus: {
      options: [true, false],
      defaultValue: []
    }
  }
};

export default meta;

export const Primary = {
  render: () => {
    const mode = useMode();

    return (
      <ThemeProvider value={{ theme: mode }}>
        <div className="eui-flex eui-flex-col eui-w-[500px]">
          <div className="eui-h-[100px]">1111</div>
          <div className="eui-h-[100px]">1111</div>
          <div className="eui-h-[100px]">1111</div>
          <div className="eui-h-[100px]">1111</div>
          <div className="eui-h-[100px]">1111</div>
          <div className="eui-relative">
            <Dropdown
              menus={[
                {
                  key: "1",
                  label: "Text1"
                },
                {
                  key: "2",
                  label: "Text2"
                },
                {
                  key: "3",
                  label: "Text3"
                }
              ]}>
              {" "}
              Here me
            </Dropdown>
          </div>
        </div>
      </ThemeProvider>
    );
  }
};

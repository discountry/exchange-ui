import { cva } from "class-variance-authority";
import { BUITheme } from "../..";

const RadioButtonCheckedStyles = cva("", {
  variants: {
    theme: {
      light: ["!eui-text-black"],
      dark: ["!eui-text-white"]
    }
  }
});

const RadioButtonLabelVariants = ({ theme, checked }: { theme: BUITheme; checked: boolean }) => {
  return cva("eui-select-none eui-text-sm", {
    variants: {
      theme: {
        light: ["eui-text-light-label-60"],
        dark: ["eui-text-dark-label-60"]
      },
      checked: {
        true: RadioButtonCheckedStyles({ theme })
      }
    }
  })({ theme, checked });
};

const RadioButtonInputVariants = ({ theme }: { theme: BUITheme }) => {
  return cva(
    "eui-relative eui-h-4 eui-w-4 eui-appearance-none eui-rounded-full eui-border-2 checked:after:eui-absolute checked:after:eui-left-1/2 checked:after:eui-top-1/2 checked:after:eui-block checked:after:eui-h-2.5 checked:after:eui-w-2.5 checked:after:eui--translate-x-1/2 checked:after:eui--translate-y-1/2 checked:after:eui-transform checked:after:eui-rounded-full",
    {
      variants: {
        theme: {
          light: [
            "!eui-border-light-label-60 checked:!eui-border-light-primary checked:after:!eui-bg-light-primary"
          ],
          dark: [
            "!eui-border-dark-label-60 checked:!eui-border-dark-primary checked:after:!eui-bg-dark-primary"
          ]
        }
      }
    }
  )({ theme });
};

export { RadioButtonInputVariants, RadioButtonLabelVariants };

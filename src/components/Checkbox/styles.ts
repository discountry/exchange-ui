import { cva } from "class-variance-authority";
import { EUITheme } from "../..";

const CheckboxCheckedStyles = cva("", {
  variants: {
    theme: {
      light: ["!eui-text-black"],
      dark: ["!eui-text-white"]
    }
  }
});

const CheckMarkCheckedStyles = cva("", {
  variants: {
    theme: {
      light: ["!eui-border-light-primary !eui-bg-light-primary"],
      dark: ["!eui-border-dark-primary !eui-bg-dark-primary"]
    }
  }
});

const CheckMarkVariants = ({ theme, checked }: { theme: EUITheme; checked: boolean }) => {
  return cva(
    "eui-flex eui-h-3 eui-w-3 eui-items-center eui-justify-center eui-border eui-bg-transparent",
    {
      variants: {
        theme: {
          light: ["!eui-border-light-label-60"],
          dark: ["!eui-border-dark-label-60"]
        },
        checked: {
          true: CheckMarkCheckedStyles({ theme })
        }
      }
    }
  )({ theme, checked });
};

const CheckboxLabelVariants = ({ theme, checked }: { theme: EUITheme; checked: boolean }) => {
  return cva("eui-select-none eui-text-sm", {
    variants: {
      theme: {
        light: ["eui-text-light-label-60"],
        dark: ["eui-text-dark-label-60"]
      },
      checked: {
        true: CheckboxCheckedStyles({ theme })
      }
    }
  })({ theme, checked });
};

export { CheckMarkVariants, CheckboxLabelVariants };

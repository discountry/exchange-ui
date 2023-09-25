import { cva } from "class-variance-authority";

const labelStyles = cva("", {
  variants: {
    theme: {
      light: "eui-text-light-label-60",
      dark: "eui-text-dark-label-60"
    }
  }
});

const menuStyles = cva(
  "eui-absolute eui-left-0 eui-mt-2 eui-w-[320px] eui-origin-top-left eui-rounded eui-shadow-lg eui-outline-none",
  {
    variants: {
      theme: {
        light: "eui-bg-light-background",
        dark: "eui-bg-dark-background"
      }
    }
  }
);

export { labelStyles, menuStyles };

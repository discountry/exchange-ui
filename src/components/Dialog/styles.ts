import { cva } from "class-variance-authority";

export const dialogVariants = cva(
  "eui-absolute eui-left-[50%] eui-top-[50%] eui-flex eui-translate-x-[-50%] eui-translate-y-[-50%] eui-flex-col eui-justify-between eui-rounded-[10px] eui-pb-[32px] eui-pt-[24px]",
  {
    variants: {
      size: {
        large: `max-[600px]:eui-w-[80%] min-[600px]:eui-min-h-[234px] min-[600px]:eui-w-[800px]`,
        medium: `max-[600px]:eui-w-[80%] min-[600px]:eui-min-h-[226px] min-[600px]:eui-w-[600px]`,
        small: `max-[600px]:eui-w-[80%] min-[600px]:eui-min-h-[210px] min-[600px]:eui-w-[520px]`
      },
      theme: {
        dark: "eui-bg-dark-hover-fill-primary",
        light: "eui-bg-light-background"
      }
    }
  }
);

export const textStyles = cva("", {
  variants: {
    theme: {
      dark: "eui-text-dark-label",
      light: "eui-text-light-label"
    }
  }
});

export const iconStyles = cva(
  "eui-absolute eui-right-[20px] eui-h-[24px] eui-w-[24px] eui-cursor-pointer",
  {
    variants: {
      theme: {
        dark: "eui-text-dark-label",
        light: "eui-text-light-label-40"
      }
    }
  }
);

export const footerStyles = cva("eui-flex eui-px-[24px]", {
  variants: {
    footerLayout: {
      right: "eui-justify-end",
      left: "eui-justify-start",
      center: "eui-justify-center"
    }
  }
});

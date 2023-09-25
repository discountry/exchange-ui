import { cva } from "class-variance-authority";

export const paginationVariants = cva(
  "eui-min-w-[24px] eui-rounded-[4px] eui-px-[4px] eui-py-[2px] eui-text-center eui-text-md eui-leading-[20px] eui-transition-colors",
  {
    variants: {
      theme: {
        dark: "eui-text-dark-label data-[current='true']:eui-bg-dark-primary data-[current='true']:eui-text-white",
        light:
          "eui-text-light-label data-[current='true']:eui-bg-light-primary data-[current='true']:eui-text-white"
      }
    }
  }
);

export const arrowVariants = cva(
  "data-[disabled='true']:eui-cursor-not-allowed eui-h-[24px] eui-cursor-pointer",
  {
    variants: {
      theme: {
        dark: "eui-text-dark-label data-[disabled='true']:eui-text-dark-label-40",
        light: "eui-text-light-label data-[disabled='true']:eui-text-light-label-40"
      }
    }
  }
);

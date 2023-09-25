import { cva } from "class-variance-authority";

const bgStyles = cva("eui-text-white", {
  variants: {
    theme: {
      light: "eui-bg-light-fill-tertiary",
      dark: "eui-bg-dark-fill-tertiary"
    }
  }
});

const arrowPositionStyles = cva("eui-absolute eui-w-[8px] eui-h-[8px]", {
  variants: {
    placement: {
      top: "eui-left-[50%] eui-translate-x-[-50%] eui-bottom-[-7px]",
      topLeft: "eui-left-[16px] eui-bottom-[-7px]",
      topRight: "eui-right-[16px] eui-bottom-[-7px]",
      bottom: "eui-left-[50%] eui-translate-x-[-50%] eui-top-[-7.5px] eui-rotate-[180deg]",
      bottomLeft: "eui-left-[16px] eui-top-[-7.5px] eui-rotate-[180deg]",
      bottomRight: "eui-right-[16px] eui-top-[-7.5px] eui-rotate-[180deg]"
    }
  }
});

export { bgStyles, arrowPositionStyles };

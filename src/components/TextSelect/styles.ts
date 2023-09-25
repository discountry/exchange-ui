import { cva } from "class-variance-authority";

const bgStyles = cva("", {
  variants: {
    theme: {
      light: "eui-bg-light-fill-secondary",
      dark: "eui-bg-dark-fill-secondary"
    }
  }
});

const itemStyles = cva("", {
  variants: {
    theme: {
      light:
        "eui-text-light-label hover:eui-bg-light-hover-fill-secondary hover:eui-text-light-primary",
      dark: "eui-text-dark-label hover:eui-bg-dark-hover-fill-secondary hover:eui-text-dark-primary"
    }
  }
});

const activeStyles = cva("", {
  variants: {
    theme: {
      light: " eui-bg-light-hover-fill-secondary eui-text-light-primary",
      dark: " eui-bg-dark-hover-fill-secondary eui-text-dark-primary"
    }
  }
});

const iconStyles = cva("eui-h-[16px] eui-w-[16px] eui-mr-[8px]", {
  variants: {
    theme: {
      light: "eui-text-dark-background",
      dark: "eui-text-light-background"
    }
  }
});

const disabledStyles = cva("", {
  variants: {
    theme: {
      light: "eui-text-light-label-20",
      dark: "eui-text-dark-label-20"
    }
  }
});

export { bgStyles, itemStyles, iconStyles, disabledStyles, activeStyles };

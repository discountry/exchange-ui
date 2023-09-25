import { cva } from "class-variance-authority";

const RailVariants = cva("", {
  variants: {
    theme: {
      light: ["eui-bg-light-line-secondary"],
      dark: ["eui-bg-dark-line-secondary"]
    }
  }
});

const TrackVariants = cva("", {
  variants: {
    theme: {
      light: ["eui-bg-light-primary"],
      dark: ["eui-bg-dark-primary"]
    }
  }
});

const SliderMarkVariants = cva("", {
  variants: {
    theme: {
      light: ["eui-border-light-line-secondary eui-bg-light-background"],
      dark: ["eui-border-dark-line-secondary eui-bg-dark-background"]
    }
  }
});

const MarkLabelVariants = cva("", {
  variants: {
    theme: {
      light: ["eui-text-light-label-40"],
      dark: ["eui-text-dark-label-40"]
    }
  }
});

const SliderThumbVariants = cva("", {
  variants: {
    theme: {
      light: ["eui-border-light-fill-secondary eui-bg-light-background"],
      dark: ["eui-border-dark-fill-secondary eui-bg-light-background"]
    }
  }
});

const SliderTooltipVariants = cva("after:border", {
  variants: {
    theme: {
      light: [
        "eui-bg-light-fill-tertiary after:eui-border-light-fill-tertiary after:eui-border-x-transparent after:eui-border-b-transparent"
      ],
      dark: [
        "eui-bg-dark-fill-tertiary after:eui-border-dark-fill-tertiary after:eui-border-x-transparent after:eui-border-b-transparent"
      ]
    }
  }
});

export {
  MarkLabelVariants,
  RailVariants,
  SliderMarkVariants,
  SliderThumbVariants,
  SliderTooltipVariants,
  TrackVariants
};

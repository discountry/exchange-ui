import { cva } from "class-variance-authority";
import { EUITheme } from "../..";

export type TypographyTagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export type TypographyWeight = "regular" | "medium" | "bold";

export type TypographyVariantsType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "subtitle3"
  | "body1"
  | "body2"
  | "body3"
  | "body4";

const TypographyVariants = (props: {
  variant: TypographyVariantsType;
  weight: TypographyWeight;
  theme: EUITheme;
}) => {
  return cva("", {
    variants: {
      variant: {
        h1: `eui-text-9xl`,
        h2: `eui-text-8xl`,
        h3: `eui-text-7xl`,
        h4: `eui-text-6xl`,
        h5: `eui-text-5xl`,
        h6: `eui-text-4xl`,
        subtitle1: `eui-text-3xl`,
        subtitle2: `eui-text-2xl`,
        subtitle3: `eui-text-xl`,
        body1: `eui-text-lg`,
        body2: `eui-text-md`,
        body3: `eui-text-base`,
        body4: `eui-text-sm`
      },
      weight: {
        bold: "eui-font-bold",
        medium: "eui-font-medium",
        regular: "eui-font-normal"
      },
      theme: {
        light: "eui-text-black",
        dark: "eui-text-white"
      }
    },
    defaultVariants: {
      variant: "body3",
      weight: "regular"
    }
  })(props);
};

export default TypographyVariants;

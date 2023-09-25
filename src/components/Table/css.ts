import { cva } from "class-variance-authority";
import { TableColumnProps } from "./interface";

export const cssFixed = (item: TableColumnProps) => {
  if (item.fixed && item.fixed === "left") {
    return `table-col-fixed-${item.fixed}`;
  }
  if (item.fixed && item.fixed === "right") {
    return `table-col-fixed-${item.fixed}`;
  }
  return "";
};

const TextAlign = {
  center: "center",
  "flex-start": "left",
  "flex-end": "right"
};

export const cssStyle = (item: TableColumnProps) => {
  const css: Record<string, string> = {
    width: item.width || "auto",
    textAlign: item.align ? TextAlign[item.align] : "center"
  };

  return css;
};

export const cssPosition = (item: TableColumnProps, position: number) => {
  const style = {
    ...cssStyle(item)
  };
  if (item.fixed) {
    style[item.fixed] = position + "px";
  }

  return style;
};

export const bgStyles = cva("", {
  variants: {
    theme: {
      dark: "!eui-bg-dark-background",
      light: "!eui-bg-light-background"
    }
  }
});

export const textStyles = cva("", {
  variants: {
    theme: {
      dark: "!eui-text-dark-label",
      light: "!eui-text-light-label"
    }
  }
});

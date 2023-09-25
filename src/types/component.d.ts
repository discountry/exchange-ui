export type EUIComponentSize = "large" | "medium" | "small";

export type EUIComponentColor = "primary" | "success" | "danger" | "warning";

export type EUIComponentType = "info" | "success" | "warning" | "danger";

export type EUITheme = "light" | "dark";

export interface Base {
  size: EUIComponentSize | string;
  theme?: EUITheme;
  className?: string;
}

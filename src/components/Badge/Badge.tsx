import useTheme from "../../provider/useTheme";
import { EUITheme } from "../../types/component";
import { cn } from "../../utils/utils";
import BadgeVariants, { BadgeColor } from "./styles";

export interface BadgeProps {
  /**
   * Badge color
   */
  color?: BadgeColor;
  /**
   * Badge contents
   */
  decoration?: boolean;
  /**
   * Badge contents
   */
  label: string;

  theme?: EUITheme;
}

export const Badge = ({ color = "primary", decoration = true, label, theme: mode }: BadgeProps) => {
  const { theme } = useTheme();
  return (
    <span className={`${cn(BadgeVariants({ theme: mode ? mode : theme, color }))}`}>
      {decoration && `• `}
      {label}
    </span>
  );
};

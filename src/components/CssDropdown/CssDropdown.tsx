import { ReactNode } from "react";
import useTheme from "../../provider/useTheme";
import { EUITheme } from "../../types/component";
import { cn } from "../../utils/utils";
import { menuStyles } from "./styles";

interface CssDropdownProps {
  /**
   * CssDropdown label
   */
  label: ReactNode;
  /**
   * CssDropdown content
   */
  content: ReactNode;
  /**
   * CssDropdown theme
   */
  theme?: EUITheme;
}

export const CssDropdown = ({ label, content, theme: mode }: CssDropdownProps) => {
  const { theme } = useTheme();
  return (
    <div className="eui-group eui-relative eui-text-left" tabIndex={-1}>
      <span className="eui-cursor-pointer">{label}</span>
      <div className="eui-invisible eui-origin-top-left -eui-translate-y-2 eui-scale-95 eui-transform eui-opacity-0 eui-transition-all eui-duration-300 group-focus-within:eui-visible group-focus-within:eui-translate-y-0 group-focus-within:eui-scale-100 group-focus-within:eui-opacity-100">
        <div
          className={cn(
            menuStyles({
              theme: mode || theme
            })
          )}
          role="menu">
          <div className="eui-px-4 eui-py-3">{content}</div>
        </div>
      </div>
    </div>
  );
};

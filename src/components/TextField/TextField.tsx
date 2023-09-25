import { LegacyRef, ReactNode, forwardRef } from "react";
import useTheme from "../../provider/useTheme";
import { EUITheme } from "../../types/component";
import { cn } from "../../utils/utils";
import { InputBgVariants, InputVariant } from "../LabelTextField/styles";

export interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: InputVariant;
  theme?: EUITheme;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  disabled?: boolean;
  error?: boolean;
  inputClassName?: string;
}

const TextField = forwardRef<HTMLInputElement, InputBaseProps>((props, ref) => {
  const {
    variant,
    theme: mode,
    startAdornment,
    endAdornment,
    type,
    error,
    disabled,
    className,
    inputClassName,
    ...otherProps
  } = props;
  const { theme } = useTheme();
  return (
    <div
      className={cn(
        InputBgVariants({
          variant,
          theme: mode ? mode : theme,
          error,
          disabled,
          noClassName: !className
        }),
        className
      )}>
      <div className="eui-flex eui-h-full eui-w-full eui-items-center eui-justify-center">
        {startAdornment && (
          <span
            className={
              typeof startAdornment === "string" ? "eui-px-2 eui-text-base eui-font-medium" : ""
            }>
            {startAdornment}
          </span>
        )}
        <input
          disabled={disabled}
          type={type}
          {...otherProps}
          ref={ref as LegacyRef<HTMLInputElement>}
          className={cn(
            "eui-h-full eui-w-full eui-flex-1 eui-bg-transparent eui-text-base eui-outline-none focus:eui-outline-0 focus-visible:eui-outline-0",
            inputClassName,
            `${!startAdornment && "eui-pl-2"}`,
            `${!endAdornment && "eui-pr-2"}`
          )}
        />
        {endAdornment && (
          <span
            className={
              typeof endAdornment === "string" ? "eui-px-2 eui-text-base eui-font-medium" : ""
            }>
            {endAdornment}
          </span>
        )}
      </div>
    </div>
  );
});

export default TextField;

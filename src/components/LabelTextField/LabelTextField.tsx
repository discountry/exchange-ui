import { forwardRef, LegacyRef, ReactNode } from "react";
import { EUITheme } from "../..";
import useTheme from "../../provider/useTheme";
import { cn } from "../../utils/utils";
import { Typography } from "../Typography/Typography";
import { HelperTextVariants, InputBgVariants, InputVariant, LabelVariants } from "./styles";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  variant: InputVariant;
  theme?: EUITheme;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  inputClassName?: string;
}

const LabelTextField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    id,
    label,
    startAdornment,
    endAdornment,
    type,
    className,
    inputClassName,
    variant,
    theme: mode,
    error,
    helperText,
    disabled,
    ...otherProps
  } = props;
  const { theme } = useTheme();
  return (
    <div>
      {label && typeof label === "string" && (
        <label htmlFor={id ? id : `eui-${label}`}>
          <Typography variant="body4" className={cn(LabelVariants({ theme: mode ? mode : theme }))}>
            {label}
          </Typography>
        </label>
      )}
      {label && typeof label !== "string" && <div className="eui-mb-1">{label}</div>}
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
            <div
              className={
                typeof startAdornment === "string" ? "eui-px-2 eui-text-base eui-font-medium" : ""
              }>
              {startAdornment}
            </div>
          )}
          <input
            id={typeof label === "string" ? (id ? id : `eui-${label}`) : undefined}
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
            <div
              className={
                typeof endAdornment === "string" ? "eui-px-2 eui-text-base eui-font-medium" : ""
              }>
              {endAdornment}
            </div>
          )}
        </div>
      </div>
      {helperText && (
        <div className="eui-mt-1">
          <Typography
            variant="body4"
            className={cn(HelperTextVariants({ theme: mode ? mode : theme }))}>
            {helperText}
          </Typography>
        </div>
      )}
    </div>
  );
});

export default LabelTextField;

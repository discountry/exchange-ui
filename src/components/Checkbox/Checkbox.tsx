import { ReactNode, forwardRef } from "react";
import { EUITheme, useTheme } from "../..";
import { cn } from "../../utils/utils";
import styles from "./Checkbox.module.scss";
import { CheckMarkVariants, CheckboxLabelVariants } from "./styles";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  theme?: EUITheme;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { label, theme: mode, id, checked, onChange, ...otherProps } = props;
  const { theme } = useTheme();
  return (
    <label htmlFor={id ? id : `eui-checkbox-${label}`} className={styles.container}>
      <input
        type="checkbox"
        id={id ? id : `eui-checkbox-${label}`}
        ref={ref}
        {...otherProps}
        checked={checked}
        onChange={onChange}
      />
      <span
        className={cn(
          styles.checkmark,
          CheckMarkVariants({
            theme: mode || theme,
            checked: !!checked
          })
        )}></span>
      <span className={cn(CheckboxLabelVariants({ theme: mode || theme, checked: !!checked }))}>
        {label}
      </span>
    </label>
  );
});

export default Checkbox;

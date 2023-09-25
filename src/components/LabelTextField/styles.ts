import { cva } from "class-variance-authority";
import { EUITheme } from "../../types/component";

export type InputVariant = "filled" | "outlined";

const LabelVariants = cva("eui-mb-1", {
  variants: {
    theme: {
      light: ["!eui-text-light-label-60"],
      dark: ["!eui-text-dark-label-60"]
    }
  }
});

const InputErrorStyles = cva("", {
  variants: {
    theme: {
      light: ["!eui-border-light-danger"],
      dark: ["!eui-border-dark-danger"]
    }
  }
});

const InputDisabledStyles = cva("", {
  variants: {
    theme: {
      light: ["!eui-text-light-label-60"],
      dark: ["!eui-text-dark-label-60"]
    }
  }
});

const InputFilledStyles = cva("", {
  variants: {
    theme: {
      light: "eui-border-transparent eui-bg-light-fill-secondary",
      dark: "eui-border-transparent eui-bg-dark-fill-secondary"
    }
  }
});

const InputOutlinedStyles = cva("", {
  variants: {
    theme: {
      light: ["eui-border-light-line-secondary"],
      dark: ["eui-border-dark-line-secondary"]
    }
  }
});

const InputBgVariants = ({
  variant,
  theme,
  error = false,
  disabled = false,
  noClassName = true
}: {
  variant: InputVariant;
  theme: EUITheme;
  error?: boolean;
  disabled?: boolean;
  noClassName?: boolean;
}) => {
  return cva("eui-w-full eui-rounded eui-border", {
    variants: {
      variant: {
        filled: InputFilledStyles({ theme }),
        outlined: InputOutlinedStyles({ theme })
      },
      theme: {
        light: [
          "eui-text-light-label focus-within:eui-border-light-primary hover:eui-border-light-line-tertiary"
        ],
        dark: [
          "eui-text-dark-label focus-within:eui-border-dark-primary hover:eui-border-dark-line-tertiary"
        ]
      },
      error: {
        true: InputErrorStyles({ theme })
      },
      disabled: {
        true: InputDisabledStyles({ theme })
      },
      noClassName: {
        true: "eui-h-[40px]"
      }
    }
  })({ variant, theme, error, disabled, noClassName });
};

const HelperTextVariants = cva("", {
  variants: {
    theme: {
      light: ["!eui-text-light-danger"],
      dark: ["!eui-text-dark-danger"]
    }
  }
});

export { HelperTextVariants, InputBgVariants, LabelVariants };

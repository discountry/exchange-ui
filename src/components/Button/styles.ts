import { cva } from "class-variance-authority";
import { EUITheme } from "../../types/component";
import { ButtonShape, ButtonSize, ButtonVariant } from "./types";

const primaryStyles = cva("eui-text-white", {
  variants: {
    theme: {
      light: ["eui-bg-light-primary", "hover:eui-bg-light-hover-primary"],
      dark: ["eui-bg-dark-primary", "hover:eui-bg-dark-hover-primary"]
    }
  }
});

const primaryDisabledStyles = cva("eui-text-white", {
  variants: {
    theme: {
      light: ["eui-bg-light-primary-40", "hover:eui-bg-light-primary-40"],
      dark: ["eui-bg-dark-primary-40", "hover:eui-bg-dark-primary-40"]
    }
  }
});

const secondaryStyles = cva("", {
  variants: {
    theme: {
      light: [
        "eui-bg-light-primary-14",
        "hover:eui-bg-light-hover-primary-10",
        "eui-text-light-primary"
      ],
      dark: [
        "eui-bg-dark-primary-14",
        "hover:eui-bg-dark-hover-primary-10",
        "eui-text-dark-primary"
      ]
    }
  }
});

const secondaryDisabledStyles = cva("", {
  variants: {
    theme: {
      light: [
        "eui-bg-light-primary-14",
        "hover:eui-bg-light-primary-14",
        "eui-text-light-primary-60"
      ],
      dark: ["eui-bg-dark-primary-14", "hover:eui-bg-dark-primary-14", "eui-text-dark-primary-60"]
    }
  }
});

const tertiaryStyles = cva("", {
  variants: {
    theme: {
      light: [
        "eui-bg-light-fill-secondary",
        "hover:eui-bg-light-hover-fill-secondary",
        "eui-text-light-label"
      ],
      dark: [
        "eui-bg-dark-fill-secondary",
        "hover:eui-bg-dark-hover-fill-secondary",
        "eui-text-dark-label"
      ]
    }
  }
});

const tertiaryDisabledStyles = cva("", {
  variants: {
    theme: {
      light: [
        "eui-bg-light-fill-primary",
        "hover:eui-bg-light-fill-primary",
        "eui-text-light-label-40"
      ],
      dark: ["eui-bg-dark-fill-primary", "hover:eui-bg-dark-fill-primary", "eui-text-dark-label-60"]
    }
  }
});

const textStyles = cva("", {
  variants: {
    theme: {
      light: ["eui-text-light-label", "hover:eui-text-light-primary"],
      dark: ["eui-text-dark-label", "hover:eui-text-dark-primary"]
    }
  }
});

const textDisabledStyles = cva("", {
  variants: {
    theme: {
      light: ["eui-text-light-label-40", "hover:eui-text-light-label-40"],
      dark: ["eui-text-dark-label-40", "hover:eui-text-dark-label-40"]
    }
  }
});

const infoStyles = cva("", {
  variants: {
    theme: {
      light: ["eui-text-light-label-40", "hover:eui-text-light-primary"],
      dark: ["eui-text-dark-label-40", "hover:eui-text-dark-primary"]
    }
  }
});

const infoDisabledStyles = cva("", {
  variants: {
    theme: {
      light: ["eui-text-light-label-40", "hover:eui-text-light-label-40"],
      dark: ["eui-text-dark-label-40", "hover:eui-text-dark-label-40"]
    }
  }
});

const ghostStyles = cva("", {
  variants: {
    theme: {
      light: [
        "eui-text-light-primary",
        "hover:eui-text-light-hover-primary",
        "eui-border",
        "eui-border-solid",
        "eui-border-light-primary",
        "hover:eui-bg-light-primary-10"
      ],
      dark: [
        "eui-text-dark-primary",
        "hover:eui-text-dark-hover-primary",
        "eui-border",
        "eui-border-solid",
        "eui-border-dark-primary",
        "hover:eui-bg-dark-primary-10"
      ]
    }
  }
});

const ghostDisabledStyles = cva("", {
  variants: {
    theme: {
      light: [
        "eui-text-light-primary-60",
        "hover:eui-text-light-primary-60",
        "eui-border",
        "eui-border-solid",
        "eui-border-light-primary-60",
        "hover:eui-bg-transparent"
      ],
      dark: [
        "eui-text-dark-primary-60",
        "hover:eui-text-dark-primary-60",
        "eui-border",
        "eui-border-solid",
        "eui-border-dark-primary-60",
        "hover:eui-bg-transparent"
      ]
    }
  }
});

const buyStyles = cva("eui-text-white", {
  variants: {
    theme: {
      light: ["eui-bg-light-green", "hover:eui-bg-light-hover-green"],
      dark: ["eui-bg-dark-green", "hover:eui-bg-dark-hover-green"]
    }
  }
});

const buyDisabledStyles = cva("eui-text-white", {
  variants: {
    theme: {
      light: ["eui-bg-light-label-20", "hover:eui-bg-light-label-20"],
      dark: ["eui-bg-dark-label-20", "hover:eui-bg-dark-label-20"]
    }
  }
});

const sellStyles = cva("eui-text-white", {
  variants: {
    theme: {
      light: ["eui-bg-light-red", "hover:eui-bg-light-hover-red"],
      dark: ["eui-bg-dark-red", "hover:eui-bg-dark-hover-red"]
    }
  }
});

const sellDisabledStyles = cva("eui-text-white", {
  variants: {
    theme: {
      light: ["eui-bg-light-label-20", "hover:eui-bg-light-label-20"],
      dark: ["eui-bg-dark-label-20", "hover:eui-bg-dark-label-20"]
    }
  }
});

const styles = {
  primary: {
    variant: primaryStyles,
    disabled: primaryDisabledStyles
  },
  secondary: {
    variant: secondaryStyles,
    disabled: secondaryDisabledStyles
  },
  tertiary: {
    variant: tertiaryStyles,
    disabled: tertiaryDisabledStyles
  },
  text: {
    variant: textStyles,
    disabled: textDisabledStyles
  },
  ghost: {
    variant: ghostStyles,
    disabled: ghostDisabledStyles
  },
  info: {
    variant: infoStyles,
    disabled: infoDisabledStyles
  },
  buy: {
    variant: buyStyles,
    disabled: buyDisabledStyles
  },
  sell: {
    variant: sellStyles,
    disabled: sellDisabledStyles
  }
};

const buttonVariants = (props: {
  variant: ButtonVariant;
  size: ButtonSize;
  theme: EUITheme;
  shape: ButtonShape;
  disabled: boolean;
}) => {
  const { theme, variant, disabled, shape } = props;

  const style = disabled ? "" : styles[variant].variant({ theme });

  return cva(
    "eui-box-border eui-inline-flex eui-items-center eui-justify-center eui-rounded-[4px]",
    {
      variants: {
        variant: {
          primary: style,
          secondary: style,
          tertiary: style,
          text: style,
          ghost: style,
          info: style,
          buy: style,
          sell: style
        },
        size: {
          small: `${
            shape === "circle" ? "eui-h-[28px] eui-min-w-[30px]" : "eui-h-[28px] eui-min-w-[80px]"
          } eui-px-[12px] eui-text-[12px] eui-leading-[18px]`,
          medium: `${
            shape === "circle" ? "eui-h-[40px] eui-min-w-[40px]" : "eui-h-[40px] eui-min-w-[100px]"
          } eui-px-[16px] eui-text-[14px] eui-leading-[20px]`,
          large: `${
            shape === "circle" ? "eui-h-[48px] eui-min-w-[48px]" : "eui-h-[48px] eui-min-w-[140px]"
          }  eui-px-[24px] eui-text-[16px] eui-leading-[24px]`,
          max: `${
            shape === "circle" ? "eui-h-[56px] eui-min-w-[56px]" : "eui-h-[56px] eui-min-w-[180px]"
          } eui-px-[24px] eui-text-[18px] eui-leading-[26px]`
        },
        shape: {
          normal: "",
          circle: "eui-rounded-[50%] eui-px-[0px] eui-py-[0px]"
        },
        disabled: {
          true: styles[variant].disabled({ theme })
        }
      }
    }
  )(props);
};

export default buttonVariants;

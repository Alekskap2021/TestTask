import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import Link, { LinkProps } from "next/link";

const cn = classNames.bind(cls);

interface defaultProps {
  size?: "m" | "l";
  bgColor?: "Default" | "Success" | "Danger";
  display?: "block" | "inline" | "flex";
  clear?: boolean;
  disable?: boolean;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, defaultProps {
  children: ReactNode;
  className?: string;
  as?: "button" | "link";
}

interface ButtonLinkProps extends LinkProps, defaultProps {
  children: ReactNode;
  className?: string;
  as?: "button" | "link";
}

export const Button: FC<ButtonProps | ButtonLinkProps> = (props) => {
  const {
    children,
    className,
    as = "button",
    size = "m",
    bgColor = "Default",
    display = "block",
    clear,
    disable,
    ...otherProps
  } = props;

  if (props.as === "link") {
    const linkProps = otherProps as ButtonLinkProps;
    return (
      <Link
        className={cn(cls.Button, className, cls[size], cls[bgColor], cls[display], {
          clear,
          disable,
        })}
        {...linkProps}
      >
        {children}
      </Link>
    );
  } else {
    const buttonProps = otherProps as ButtonProps;
    return (
      <button
        className={cn(cls.Button, className, cls[size], cls[bgColor], cls[display], {
          clear,
          disable,
        })}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }
};

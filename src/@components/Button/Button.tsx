import React, { FC, useState } from "react";

import Icon from "../Icon/Icon";
import { dataTestIdStringMod } from "../../utils";

type Sizes = "xs" | "sm" | "md" | "lg";
type Variants = "fill" | "outlined" | "shade";
type Colors = "";
type Round = "md" | "lg";
type Types = "button" | "submit" | "reset";

interface BtnProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disable?: boolean;
  children: string | JSX.Element | any;
  className?: string;
  width?: string;
  height?: string;
  size?: Sizes;
  type?: Types;
  variant?: Variants;
  color?: Colors;
  round?: Round;
  ref?: any;
  form?: string;
  icon?: string;
  iconClassName?: string;
  iconVariant?: "outlined" | "filled" | "round" | "sharp" | "two-tone";
  onMouseEnter?: Function;
  onMouseLeave?: Function;
  dataTestId?: string;
}

const Button: FC<BtnProps> = ({
  onClick,
  disable,
  ref,
  children,
  size = "md",
  type = "button",
  variant = "fill",
  color = "primary",
  width,
  height,
  round = "md",
  className,
  form,
  icon,
  iconClassName,
  iconVariant,
  onMouseEnter,
  onMouseLeave,
  dataTestId,
  ...rest
}) => {
  const [rounded] = useState<string>(round === "lg" ? "round-lg" : round === "md" ? "round" : "");

  return (
    <button
      className={`   ${width ? "w-" + width : ""} ${height ? "h-" + height : ""}  font-inter btn-${size} ${variant} ${
        disable ? "disable" : color
      } ${rounded}  ${className ? className : ""}`}
      onMouseEnter={(e) => onMouseEnter && onMouseEnter(e)}
      onMouseLeave={(e) => onMouseLeave && onMouseLeave(e)}
      data-test-id={dataTestId ? dataTestId : typeof children == "string" ? dataTestIdStringMod(children) + "-btn" : ""}
      form={form && form}
      disabled={disable}
      onClick={onClick}
      type={type}
      ref={ref || null}
      {...rest}
    >
      {icon ? (
        <Icon
          name={icon}
          variant={iconVariant ? iconVariant : "filled"}
          className={`${size === "xs" || size === "lg" ? "mr-3" : "mr-[10px]"} ${iconClassName ? iconClassName : ""}`}
        />
      ) : null}
      {children}
    </button>
  );
};

export default Button;

import React, { FC } from "react";
import { dataTestIdStringMod } from "../../utils";

type Variants = "outlined" | "filled" | "round" | "sharp" | "two-tone";

interface IconProps {
  name: string;
  variant?: Variants;
  // onClick?: (e: MouseEvent) => void;
  className?: string;
  id?: string;
  role?: string;
  // disabled?: boolean;
  style?: React.CSSProperties;
  dataTestId?: string;
}

const Icon: FC<IconProps> = ({
  name,
  variant = "filled",
  className,
  id,
  role,
  // disabled,
  // onClick,
  style,
  dataTestId,
}) => {
  return (
    <span
      id={id}
      className={`${variant === "filled" ? "material-icons" : `material-icons-${variant}`} ${
        className ? className : ""
      } select-none`}
      role={role}
      style={style}
      // onClick={(e) => onClick && onClick(e)}
      data-test-id={dataTestIdStringMod(dataTestId)}
    >
      {name}
    </span>
  );
};

export default Icon;

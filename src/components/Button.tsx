import type { PropsWithChildren } from "react";
import { clsx } from "clsx";
type ButtonProps = PropsWithChildren<{
  onClick?: () => void;
  color: "primary" | "danger" | "success" | "warning" | "info" | "default";
  outline?: boolean;
  borderRadius?: number;
}>;

export const Button = ({
  children,
  color = "primary",
  outline = false,
  borderRadius = 4,
}: ButtonProps) => {
  return (
    <button
      className={clsx("px-4 py-2 rounded font-medium transition-colors", {
        // filled
        "bg-primary-60 text-white hover:bg-primary-40":
          !outline && color === "primary",
        "bg-danger-60 text-white hover:bg-danger-40":
          !outline && color === "danger",
        "bg-success-60 text-white hover:bg-success-40":
          !outline && color === "success",
        "bg-warning-60 text-white hover:bg-warning-40":
          !outline && color === "warning",
        "bg-info-60 text-white hover:bg-info-40": !outline && color === "info",
        "bg-white border border-primary-30 text-font-100 hover:bg-primary-20":
          !outline && color === "default",

        // outlined
        "border border-primary-60 text-primary-60 bg-primary-20 hover:bg-primary-20":
          outline && color === "primary",
        "border border-danger-60 text-danger-60 bg-danger-20 hover:bg-danger-20":
          outline && color === "danger",
        "border border-success-60 text-success-60 bg-success-20 hover:bg-success-20":
          outline && color === "success",
        "border border-warning-60 text-warning-60 bg-warning-20 hover:bg-warning-20":
          outline && color === "warning",
        "border border-info-60 text-info-20 bg-info-20 hover:bg-info-40":
          outline && color === "info",
        "border border-primary-60 text-font-100 bg-white hover:bg-primary-20":
          outline && color === "default",
      })}
      style={{ borderRadius: `${borderRadius}px` }}>
      {children}
    </button>
  );
};

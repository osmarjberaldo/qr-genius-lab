
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const Container = ({ children, className, maxWidth = "xl" }: ContainerProps) => {
  const maxWidthClasses = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    full: "max-w-full",
  };

  return (
    <div className={cn("w-full px-4 mx-auto", maxWidthClasses[maxWidth], className)}>
      {children}
    </div>
  );
};

export default Container;

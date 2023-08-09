import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./style";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

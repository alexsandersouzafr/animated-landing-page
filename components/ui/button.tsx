import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center transition-all w-min duration-300 justify-center whitespace-nowrap focus:outline focus:outline-black rounded-md ",
  {
    variants: {
      variant: {
        default: "bg-primary text-white active:bg-shade2",
        tertiary: "bg-transparent text-primary hover:bg-silver active:bg-tint5",
      },
      size: {
        default: "h-[56px] px-8 py-2 text-lg ",
        md: "h-[48px] px-6 text-base ",
        sm: "h-[32px] px-8 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

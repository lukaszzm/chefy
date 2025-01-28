import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex gap-2 items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        destructiveGhost: "bg-transparent text-destructive hover:bg-destructive/5 hover:text-destructive",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        success: "bg-success text-success-foreground hover:bg-success/90",
        info: "bg-info text-info-foreground hover:bg-info/90",
      },
      size: {
        default: "h-10 px-4 py-2 min-w-20",
        sm: "h-9 rounded-md px-3 min-w-16",
        lg: "h-11 rounded-md px-8 min-w-24",
        icon: "size-10",
        control: "size-20 rounded-full",
      },
      items: {
        default: "justify-center",
        start: "justify-start",
        end: "justify-end",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      items: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, items, isLoading, disabled, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled || isLoading;

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, items, className }))}
        disabled={isDisabled}
        ref={ref}
        {...props}
      >
        {isLoading ? <LoadingSpinner /> : children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

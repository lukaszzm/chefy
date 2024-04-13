import type { HTMLAttributes } from "react";
import { forwardRef } from "react";

import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { cn } from "@/utils/cn";

const containerVariants = cva("container max-w-4xl py-4 m-0 sm:m-6 md:m-8 lg:m-10", {
  variants: {
    variant: {
      default: "sm:rounded-lg sm:border sm:border-border bg-popover",
      ghost: "bg-transparent border-none",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ContainerProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(({ className, variant, ...props }, ref) => {
  return <div className={cn(containerVariants({ variant, className }))} ref={ref} {...props} />;
});

Container.displayName = "Container";

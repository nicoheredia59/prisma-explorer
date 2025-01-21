import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@acme/ui";

const notificationVariants = cva(
  "relative flex w-full gap-4 rounded-lg border bg-background p-4 shadow-sm",
  {
    variants: {
      variant: {
        default: "border-border",
        info: "border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950",
        warning:
          "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950",
        error: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950",
        success:
          "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Notification = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof notificationVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="status"
    aria-live="polite"
    className={cn(notificationVariants({ variant }), className)}
    {...props}
  />
));
Notification.displayName = "Notification";

const NotificationContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex-1 space-y-1", className)} {...props} />
));
NotificationContent.displayName = "NotificationContent";

const NotificationTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
NotificationTitle.displayName = "NotificationTitle";

const NotificationDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
NotificationDescription.displayName = "NotificationDescription";

const NotificationActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mt-3 flex gap-3", className)} {...props} />
));
NotificationActions.displayName = "NotificationActions";

export {
  Notification,
  NotificationContent,
  NotificationTitle,
  NotificationDescription,
  NotificationActions,
};

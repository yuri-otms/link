import * as React from "react"
import { cn } from "@/lib/utils" 

const Link = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<"a">>(
  ({ className, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          "text-cyan-500 hover:text-cyan-700",
          className
        )}
        {...props}
        target="_blank"
      >
        {children}
      </a>
    )
  }
)
Link.displayName = "Link"

export { Link }
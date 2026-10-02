import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-zinc-900 text-zinc-50 hover:bg-zinc-800 shadow-sm active:scale-[0.98]',
        destructive: 'bg-red-600 text-white hover:bg-red-700 shadow-sm active:scale-[0.98]',
        outline: 'border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 text-zinc-700',
        secondary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 active:scale-[0.98]',
        ghost: 'hover:bg-zinc-100 hover:text-zinc-900 text-zinc-600',
        link: 'text-zinc-900 underline-offset-4 hover:underline',
        pill: 'rounded-full bg-zinc-900 text-white hover:bg-zinc-800 px-4 py-1.5 shadow-sm',
      },
      size: {
        default: 'h-8 px-3 py-1.5',
        sm: 'h-7 rounded-md px-2 text-xs',
        lg: 'h-9 rounded-md px-5 text-sm',
        icon: 'h-8 w-8',
        xs: 'h-6 px-1.5 text-[11px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }

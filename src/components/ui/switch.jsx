import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { cn } from '@/lib/utils'

const Switch = React.forwardRef(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    ref={ref}
    {...props}
    className={cn(
      'peer inline-flex items-center shrink-0 cursor-pointer rounded-full border border-[#DDDDE080] shadow-sm transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
      'h-[22px] w-[40px] sm:h-[24px] sm:w-[42px] 3xl:h-[30px] 3xl:w-[54px]',
      'data-[state=checked]:bg-success-400 data-[state=unchecked]:bg-gray-100',
      className
    )}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform',
        'h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] 3xl:h-[22px] 3xl:w-[22px]',
        'data-[state=unchecked]:translate-x-[2px] data-[state=checked]:translate-x-[20px]',
        'sm:data-[state=checked]:translate-x-[20px] 3xl:data-[state=checked]:translate-x-[27px]'
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }

import { cn } from '@/lib/utils'
import { ComponentPropsWithRef, FC } from 'react'

export const Layout: FC<ComponentPropsWithRef<"div">> = ({ children, className, ref, ...props }) => {

    return (
        <div className={cn('flex gap-8 h-screen w-full ', className)} ref={ref} {...props}>
            {children}
        </div>
    )
}

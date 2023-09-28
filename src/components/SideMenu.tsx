import { cn } from "@/lib/utils"
import { ComponentPropsWithRef, FC } from "react"

export const SideMenu: FC<ComponentPropsWithRef<"aside">> = ({ children, className, ref, ...props }) => {
    return (
        <aside className={cn("grid h-full w-fit content-between justify-items-center p-2 py-8 shadow-xl", className)} ref={ref} {...props}>
            {children}
        </aside>
    )
}


export const SideMenuFooter: FC<ComponentPropsWithRef<"div">> = ({ children, className, ref, ...props }) => {
    return <div className={cn("grid gap-6", className)} ref={ref} {...props}>
        {children}
    </div>
}

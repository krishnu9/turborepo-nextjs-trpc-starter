import {cn} from "@repo/ui";

const MaxWidthWrapper = ({children, className}: {
    className?: string
    children: React.ReactNode
  }) => {
    return (
        <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper;

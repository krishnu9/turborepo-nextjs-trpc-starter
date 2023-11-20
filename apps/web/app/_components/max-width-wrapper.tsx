import type { ReactNode } from "react";
// import {cn} from "@krishnu9/tailwind-config";
import {cn} from "ui";

const MaxWidthWrapper = ({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}): JSX.Element => {
    return (
    <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>{children}</div>
    )
}

export default MaxWidthWrapper;


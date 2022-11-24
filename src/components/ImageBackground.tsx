import { ReactNode } from "react";

interface ImageBackgroundProps {
    isHome: boolean
    children: ReactNode
}

export function ImageBackground ({ isHome, children }: ImageBackgroundProps) {
    return (
        <div className={`${isHome ? 'bg-welcome bg-right' : 'bg-app bg-cover'} bg-no-repeat bg-zinc-900 h-screen`}>
            {children}
        </div>
    )
}
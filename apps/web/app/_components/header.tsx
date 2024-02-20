import { MainNav } from "./main-nav";

export default function Header() {
    return (
        <header className="sticky flex justify-center border-b">
            <div className="flex items-center justify-between w-full h-16 max-w-3xl px-4 mx-auto sm:px-6 border-2 border-red-300">
                <MainNav />
            </div>
        </header>
    )
}
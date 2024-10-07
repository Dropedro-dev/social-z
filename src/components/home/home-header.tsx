import { Logo } from "../UI/logo"

export const HomeHeader = () => {
    return (
        <header className="flex justify-between p-6 border-b-2 border-gray-900">
            <div className="lg:hidden">
                <Logo size={24}/>
            </div>
        </header>
    )
}
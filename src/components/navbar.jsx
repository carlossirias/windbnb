import { SearchIcon } from "./icons-app"

export function Navbar()
{
    return(
        <nav className="w-full max-w-[1800px] py-8 px-4 md:px-20 items-center flex flex-wrap place-content-between">
            <div>
                <img src="./logo.svg" alt="Windbnb" />
            </div>
            <div className="max-sm:w-full flex justify-center max-sm:mt-10">
                <button className="overflow-hidden flex shadow-[0px_1px_6px_0px] shadow-gray-200 rounded-2xl">
                    <div className="w-fit h-full border-r border-gray-200 p-4">
                        <h1 className="text-[#333] text-sm">Helsinki, Finland</h1>
                    </div>
                    <div className="w-fit h-full border-r border-gray-200 p-4">
                        <h1 className="text-[#BDBDBD] text-sm">Add guest</h1>
                    </div>
                    <div className="h-[52px] flex items-center justify-center px-4">
                        <SearchIcon></SearchIcon>
                    </div>
                </button>
            </div>
        </nav>
    )
}
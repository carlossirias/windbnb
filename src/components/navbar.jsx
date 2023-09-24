import { useState } from "react"
import { useFilters } from "../hocks/useFilters"
import { SearchIcon } from "./icons-app"
import { Modal } from "./modal"

export function Navbar() {
    const { filter } = useFilters()
    const [modal, setModal] = useState()

    const closeModal = (event) => {event.preventDefault(); setModal(false) }
    const openModal = () => { setModal(true) }

    return (
        <>
            <nav className="w-full max-w-[1800px] py-8 px-4 md:px-20 items-center flex flex-wrap place-content-between">
                <div>
                    <img src="./logo.svg" alt="Windbnb" />
                </div>
                <div className="max-sm:w-full flex justify-center max-sm:mt-10">
                    <button onClick={openModal} className="overflow-hidden flex shadow-[0px_1px_6px_0px] shadow-gray-200 rounded-2xl">
                        <span className="w-fit h-full border-r border-gray-200 p-4">
                            <span className="text-[#333] text-sm">{filter.city}, Finland</span>
                        </span>
                        <span className="w-fit h-full border-r border-gray-200 p-4">
                            <span className="text-[#BDBDBD] text-sm">Add guest</span>
                        </span>
                        <span className="h-[52px] flex items-center justify-center px-4">
                            <SearchIcon></SearchIcon>
                        </span>
                    </button>
                </div>
            </nav>

            <Modal modal={modal} closeModal={closeModal} />
            
        </>
    )
}
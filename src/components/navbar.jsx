import { useState } from "react"
import { useFilters } from "../hocks/useFilters"
import { CloseIcon, SearchIcon } from "./icons-app"
import { getCities } from "../services/getCities"
import { AdressIcon } from "./icons-app"

export function Navbar() {
    const { filter } = useFilters()
    const [modal, setModal] = useState(false)
    const [isLocation, setIsLocation] = useState(true)

    const closeModal = () => { setModal(false) }

    const openModal = () => { setModal(true) }

    const modalClass = modal ? 'visible' : 'hidden ';
    console.log(modalClass)

    const cities = getCities();

    const locationClass = isLocation ? 'border border-black' : ""

    const guestsClass = !isLocation ? 'border border-black' : "" 

    const handleLocation = () => { setIsLocation(true) }
    const handleGuests = () => { setIsLocation(false)}

    return (
        <>
            <nav className="w-full max-w-[1800px] py-8 px-4 md:px-20 items-center flex flex-wrap place-content-between">
                <div>
                    <img src="./logo.svg" alt="Windbnb" />
                </div>
                <div className="max-sm:w-full flex justify-center max-sm:mt-10">
                    <button onClick={openModal} className="overflow-hidden flex shadow-[0px_1px_6px_0px] shadow-gray-200 rounded-2xl">
                        <div className="w-fit h-full border-r border-gray-200 p-4">
                            <span className="text-[#333] text-sm">{filter.city}, Finland</span>
                        </div>
                        <div className="w-fit h-full border-r border-gray-200 p-4">
                            <span className="text-[#BDBDBD] text-sm">Add guest</span>
                        </div>
                        <div className="h-[52px] flex items-center justify-center px-4">
                            <SearchIcon></SearchIcon>
                        </div>
                    </button>
                </div>
            </nav>

            <div className={`modal__container pointer-events-auto flex fixed z-0 top-0 left-0 right-0 bottom-0  ${modalClass} `}>
                <a href="#" onClick={closeModal} className="modal__bg bg-black/20"></a>
                <div className="modal z-10 w-full fixed top-0 m-[auto] max-sm:h-[90vh] flex justify-center bg-white">
                    <div className="max-w-[1800px] py-16 px-4 md:px-20 w-full h-full ">
                        <div className="w-full md:hidden flex items-center place-content-between">
                            <span className="font-bold text-[#333333]">Edit search</span>
                            <button><CloseIcon color="#333333" onClick={closeModal} /></button>
                        </div>

                        <div className="flex flex-col h-full gap-6 md:justify-center">
                            <div className="grid w-full rounded-l-2xl rounded-r-2xl max-md:mt-4 grid-cols-3 gap-0 shadow-[0px_1px_6px_0px_rgba(0,0,0,0.10)]">
                                <button className="w-full overflow-hidden md:rounded-l-2xl border-r  drop-shadow-[0px_1px_6px_0px] shadow-gray-200 " onClick={handleLocation}>
                                    <div className={`px-7 py-3 flex w-full flex-col rounded-2xl ${locationClass}`}>
                                        <span className="text-left text-xs font-extrabold">LOCATION</span>
                                        <span className="text-[#333] font-normal text-left text-sm">{filter.city}, Finland</span>
                                    </div>
                                </button>
                                <button className="w-full border-r" onClick={handleGuests}>
                                    <div className={`px-7 py-3 flex w-full flex-col rounded-2xl ${guestsClass}`}>
                                        <span className="text-left text-xs font-extrabold">GUESTS</span>
                                        <span className="text-[#BDBDBD] text-left text-sm">Add guest</span>
                                    </div>
                                </button>
                                <div className="flex items-center justify-center max-sm:hidden ">
                                    <button className="py-[0.94rem] flex items-center gap-[0.68rem] px-6 bg-[#EB5757] rounded-2xl">
                                        <SearchIcon className='w-4' color="#F2F2F2" />
                                        <span className="text-[#F2F2F2] font-bold">Search</span>
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 w-full">
                                <div className=" flex flex-col md:p-2 md:h-[240px]">
                                    {
                                        isLocation && cities.map(city => {
                                            return <button key={city} value={city} className={`flex hover:bg-gray-100 transition p-4 gap-2 items-center ${filter.city == city ? 'bg-gray-50' : ''} font-normal`}> <AdressIcon color="#4F4F4F" /> {city + ', Finland'}</button>
                                        })
                                    }
                                </div>

                                <div className="flex gap-12 flex-col md:p-2 md:h-[240px]">
                                    {!isLocation && <div className="flex flex-col gap-0">
                                        <span className="text-[#333] font-bold">Adults</span>
                                        <span className="text-[#BDBDBD] font-normal">Ages 13 or above</span>
                                        <div className="flex gap-4 mt-3 items-center">
                                            <button className="flex items-center px-2 border border-[#828282] transition text-[#828282] rounded">-</button>
                                            <span className="text-[#333] font-bold">0</span>
                                            <button className="flex items-center px-2 border border-[#828282] text-[#828282] rounded">+</button>
                                        </div>
                                    </div>}

                                    {!isLocation && <div className="flex flex-col gap-0">
                                        <span className="text-[#333] font-bold">Children</span>
                                        <span className="text-[#BDBDBD] font-normal">Ages 2-12</span>
                                        <div className="flex gap-4 mt-3 items-center">
                                            <button className="flex items-center px-2 border border-[#828282] transition text-[#828282] rounded">-</button>
                                            <span className="text-[#333] font-bold">0</span>
                                            <button className="flex items-center px-2 border border-[#828282] text-[#828282] rounded">+</button>
                                        </div>
                                    </div>}
                                </div>

                                <div className="h-full">

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
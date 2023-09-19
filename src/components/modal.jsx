/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { getCities } from "../services/getCities"
import { CloseIcon, SearchIcon } from "./icons-app"
import { useFilters } from "../hocks/useFilters"
import { CityButton } from "./city-button"


export function Modal({ closeModal, modal }) {
    const { filter, setFilters, getStays } = useFilters()
    const [isLocation, setIsLocation] = useState(true)
    const initialGuests = JSON.parse(window.localStorage.getItem('guests'))
    const [guests, setGuests] = useState(initialGuests || {
        children: 0,
        adults: 0,
    })

    useEffect(() => {
        const children = guests.children
        const adults = guests.adults

        const totalGuests = children + adults
        window.localStorage.setItem('filters', JSON.stringify({ ...filter, maxGuests: totalGuests }))
        setFilters({ ...filter, maxGuests: totalGuests })
    }, [guests])

    const modalClass = modal === true ? 'visible' : 'closedModal';
    const modalCloseClass = modal === false ? 'closeModal' : '' 

    const cities = getCities();

    const locationClass = isLocation ? 'border border-black' : ""
    const guestsClass = !isLocation ? 'border border-black' : ""

    const handleLocation = () => { setIsLocation(true) }
    const handleGuests = () => { setIsLocation(false) }

    const plusChildrenGuests = () => {
        const newGuests = { ...guests, children: guests.children + 1 }
        window.localStorage.setItem('guests', JSON.stringify(newGuests))
        setGuests({ ...guests, children: guests.children + 1 })
    }
    const plusAdultsGuests = () => {
        const newGuests = { ...guests, adults: guests.adults + 1 }
        window.localStorage.setItem('guests', JSON.stringify(newGuests))
        setGuests({ ...guests, adults: guests.adults + 1 })
    }

    const subtractChildrenGuests = () => {
        if (guests.children <= 0) return
        const newGuests = { ...guests, children: guests.children - 1 }
        window.localStorage.setItem('guests', JSON.stringify(newGuests))
        setGuests({ ...guests, children: guests.children - 1 })
    }

    const subtractAdultsGuests = () => {
        if (guests.adults <= 0) return
        const newGuests = { ...guests, adults: guests.adults - 1 }
        window.localStorage.setItem('guests', JSON.stringify(newGuests))
        setGuests({ ...guests, adults: guests.adults - 1 })
    }

    return (
        <div className={`modal__container pointer-events-auto flex fixed z-0 top-0 left-0 right-0 bottom-0 transition ${modalClass} `}>
            <a href="#" onClick={closeModal} className="modal__bg bg-black/20"></a>
            <div className={`modal z-10 w-full fixed top-0 m-[auto] max-sm:h-[85vh] flex justify-center bg-white ${modalCloseClass}`}>

                <div className="max-w-[1800px] md:py-16 p-4 md:px-20 w-full h-full ">
                    <div className="w-full md:hidden flex items-center place-content-between">
                        <span className="font-bold text-[#333333]">Edit search</span>
                        <button onClick={closeModal}><CloseIcon color="#333333" /></button>
                    </div>

                    <div className="flex flex-col place-content-between h-[95%] md:justify-center">
                        <div className="flex flex-col gap-6">
                            <div className="grid w-full max-sm:rounded-t-2xl max-sm:rounded-b-2xl md:rounded-l-2xl md:rounded-r-2xl max-md:mt-4 grid-cols-1 md:grid-cols-3 gap-0 shadow-[0px_1px_6px_0px_rgba(0,0,0,0.10)]">
                                <button className="w-full overflow-hidden md:rounded-l-2xl max-sm:border-b md:border-r  drop-shadow-[0px_1px_6px_0px] shadow-gray-200 " onClick={handleLocation}>
                                    <div className={`px-7 py-3 flex w-full flex-col rounded-2xl ${locationClass}`}>
                                        <span className="text-left text-xs font-extrabold">LOCATION</span>
                                        <span className="text-[#333] font-normal text-left text-sm">{filter.city}, Finland</span>
                                    </div>
                                </button>
                                <button className="w-full md:border-r" onClick={handleGuests}>
                                    <div className={`px-7 py-3 flex w-full flex-col rounded-2xl ${guestsClass}`}>
                                        <span className="text-left text-xs font-extrabold">GUESTS</span>
                                        <span className="text-[#BDBDBD] text-left text-sm">Add guest</span>
                                    </div>
                                </button>
                                <div className="md:flex items-center justify-center hidden ">
                                    <button onClick={getStays} className="py-[0.94rem] flex items-center gap-[0.68rem] px-6 bg-[#EB5757] rounded-2xl">
                                        <SearchIcon className='w-4' color="#F2F2F2" />
                                        <span className="text-[#F2F2F2] font-bold">Search</span>
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 w-full">
                                <div className=" flex flex-col md:p-2 md:h-[240px]">
                                    {
                                        isLocation && cities.map(city => {
                                            return <CityButton key={city} city={city} />
                                        })
                                    }
                                </div>

                                <div className="flex gap-12 flex-col p-4 md:p-2 md:h-[240px]">
                                    {!isLocation && <div className="flex flex-col gap-0">
                                        <span className="text-[#333] font-bold">Adults</span>
                                        <span className="text-[#BDBDBD] font-normal">Ages 13 or above</span>
                                        <div className="flex gap-4 mt-3 items-center">
                                            <button className="flex items-center px-2 border border-[#828282] transition text-[#828282] rounded" onClick={subtractAdultsGuests}>-</button>
                                            <span className="text-[#333] font-bold">{guests.adults}</span>
                                            <button className="flex items-center px-2 border border-[#828282] text-[#828282] rounded" onClick={plusAdultsGuests}>+</button>
                                        </div>
                                    </div>}

                                    {!isLocation && <div className="flex flex-col gap-0">
                                        <span className="text-[#333] font-bold">Children</span>
                                        <span className="text-[#BDBDBD] font-normal">Ages 2-12</span>
                                        <div className="flex gap-4 mt-3 items-center">
                                            <button className="flex items-center px-2 border border-[#828282] transition text-[#828282] rounded" onClick={subtractChildrenGuests}>-</button>
                                            <span className="text-[#333] font-bold">{guests.children}</span>
                                            <button className="flex items-center px-2 border border-[#828282] text-[#828282] rounded" onClick={plusChildrenGuests}>+</button>
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:hidden justify-center flex">
                            <button onClick={getStays} className="py-[0.94rem] flex items-center gap-[0.68rem] px-6 bg-[#EB5757] rounded-2xl">
                                <SearchIcon className='w-4' color="#F2F2F2" />
                                <span className="text-[#F2F2F2] font-bold">Search</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}
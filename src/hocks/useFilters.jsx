import { useContext, useEffect } from "react";
import { StaysContext } from "../context/Stays";
import  staysComplete  from '../mocks/stays.json'

export function useFilters()
{
    const {stays, setStays, filter, setFilters} = useContext(StaysContext)

    if(stays === undefined)
    {
        throw new Error('UseFilters must be used within a FilterProvider')
    }

    useEffect(()=>{
        getStays()
    }, [])

    function getStays()
    {
        const staysFiltered = staysComplete.filter(stay=>{
            return (stay.city == filter.city && filter.maxGuests <= stay.maxGuests ) || (filter.city == 'All' && filter.maxGuests <= stay.maxGuests)
        })
        setStays(staysFiltered)
    }

    return {stays, setStays, filter, setFilters, getStays}
}
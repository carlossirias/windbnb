import { useContext } from "react";
import { StaysContext } from "../context/Stays";

export function useFilters()
{
    const {stays, setStays, filter, setFilters} = useContext(StaysContext)

    const staysFiltered = stays.filter(stay=>{
        return (stay.city == filter.city && filter.maxGuests <= stay.maxGuests ) || (filter.city == 'All' && filter.maxGuests <= stay.maxGuests)
    })

    console.log(staysFiltered)
    return {stays: staysFiltered, setStays, filter, setFilters}
}
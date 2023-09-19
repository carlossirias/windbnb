import { createContext, useState } from "react";
import staysRes from '../mocks/stays.json'

export const StaysContext = createContext()

// eslint-disable-next-line react/prop-types
export function StayProvider ({children})
{

    const filtersInitialState = JSON.parse(window.localStorage.getItem('filters'))
    const staysInitialState = JSON.parse(window.localStorage.getItem('stays'))
  
    const [stays, setStays] = useState(staysInitialState || staysRes)
    const [filter, setFilters] = useState(filtersInitialState || {
        city: 'All',
        maxGuests: 0
    })

    return(
        <StaysContext.Provider
        value={{
            stays,
            setStays,
            filter,
            setFilters
        }} >
            {children}
        </StaysContext.Provider>
    )
}
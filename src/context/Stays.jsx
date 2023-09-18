import { createContext, useState } from "react";
import staysRes from '../mocks/stays.json'

export const StaysContext = createContext()

// eslint-disable-next-line react/prop-types
export function StayProvider ({children})
{
    const [stays, setStays] = useState(staysRes)
    const [filter, setFilters] = useState({
        city: 'All',
        maxGuests: 0
    })
    console.log(stays)
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
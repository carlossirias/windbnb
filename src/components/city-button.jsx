/* eslint-disable react/prop-types */
import { useFilters } from "../hocks/useFilters";
import { AdressIcon } from "./icons-app"
import { useState} from "react"

export function CityButton({city})
{
    const {filter, setFilters} = useFilters()
    const [isClicked, setIsClicked] = useState(filter.city !== 'All');

    const handleCity = (event) =>
    {
        const cityName = event?.target?.value;
        if(!isClicked){
            window.localStorage.setItem('filters',  JSON.stringify({ ...filter, city: cityName}))
            setFilters({ ...filter, city: cityName})  
        }  
        if(isClicked){
            window.localStorage.setItem('filters',  JSON.stringify({ ...filter, city: 'All'}))
            setFilters({ ...filter, city: 'All'})  
        }  

        setIsClicked(!isClicked)
    }

    return(
        <button key={city}  onClick={handleCity} value={city} className={`flex hover:bg-gray-100 transition p-4 gap-2 items-center ${filter.city == city && isClicked ? 'bg-gray-50' : ''} font-normal`}> <AdressIcon color="#4F4F4F" /> {city + ', Finland'}</button>
    )
}
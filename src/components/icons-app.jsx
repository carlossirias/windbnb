// eslint-disable-next-line react/prop-types
export function SearchIcon({color= '#EB5757'})
{
    return(
        <svg className="w-[1rem] h-[1rem]" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fill={color} d="M10.68 11.74a6 6 0 0 1-7.922-8.982a6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275a.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"/>
        </svg>
    )
}

// eslint-disable-next-line react/prop-types
export function StarIcon({color = '#EB5757'})
{
    return(
        <svg className="w-[1.5rem] h-[1.5rem]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill={color} d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/>
        </svg>
    )
}

// eslint-disable-next-line react/prop-types
export function CloseIcon({color = '#EB5757'})
{
    return(
        <svg className="w-6 h-6" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <path fill={color} d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"/>
        </svg>
    )
}

// eslint-disable-next-line react/prop-types
export function AdressIcon({color = '#EB5757'})
{
    return (
        <svg className="h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill={color} d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"/>
        </svg>
    )
}
import { StarIcon } from "./icons-app"

// eslint-disable-next-line react/prop-types
export function Card({superHost = true, image, type, rating, beds, title })
{
    return (
        <div className="flex flex-col gap-3 place-content-between w-full lg:max-w-[400px]">
            <div className="w-full h-[16rem]">
                <img src={image} className='h-full w-full object-cover rounded-3xl' alt="" />
            </div>
            <div className="flex mt-2 place-content-between items-center">
                <div className="flex gap-2 items-center">
                    {
                        superHost && <SuperHost/>
                    }
                    <span className="stays__section__texts text-[#828282] text-sm font-medium">{type} {beds &&<span>. {beds} beds</span>} </span>
                </div>
                <div className="flex gap-1">
                    <StarIcon/>
                    <span className="stays__section__texts">{rating}</span>
                </div>
            </div>
            <div>
                <span className="text-[#333] stays__section__texts font-semibold">{title}</span>
            </div>
        </div>
    )
}

function SuperHost()
{
    return(
        <span className="stays__section__texts py-[0.37rem] px-2 rounded-full border border-black font-bold text-[0.75rem]">SUPER HOST</span>
    )
}
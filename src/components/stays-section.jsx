import { Card } from "./card"
import stays from '../mocks/stays.json'

export function StaysSection()
{
    return(
        <section className="min-h-screen flex flex-col w-full max-w-[1800px] ">
            <header className="flex place-content-between items-center max-sm:pb-4 max-sm:pt-2 md:py-8 px-4 md:px-20">
                <h1 className="stays__section__texts font-bold text-2xl">Stays in Finland</h1>
                <span className="stays__section__texts text-sm font-medium">12+ stays</span>
            </header>
            <article className="stays__section__article gap-x-6 gap-8 px-4 md:px-20 overflow-hidden">

                {
                    stays?.map((stay)=>{
                        return <Card 
                        key={stay.title} 
                        superHost={stay.superHost}
                        title={stay.title}
                        beds={stay.beds}
                        image={stay.photo}
                        type={stay.type}
                        rating={stay.rating}/>
                    })
                }
                

            </article>
        </section>
    )
}
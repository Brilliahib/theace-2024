import React from 'react'
import EventCardDetail from './event-card-detail'
import { Orbitron } from "next/font/google";


const orbitron = Orbitron({ subsets: ["latin"] });
const EventCardMain = () => {
    return (
        <>
            <div className='text-center space-y-4 my-16'>
                <h1 className={`${orbitron.className}  text-4xl md:text-6xl`}>
                    Ada <span className='text-primary'>event</span> apa aja sih?
                </h1>
                <p>Bakalan ada apa ajasih sebelum The ACE berlangsung</p>
            </div>
            <EventCardDetail />
        </>
    )
}

export default EventCardMain
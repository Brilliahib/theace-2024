import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';
import logo from "/public/images/logo.png";

const EventComponent = () => {
    return (
        <div className="pad-x py-8">
            <div className=" rounded-xl border-t-2 border-8 border-primary flex lg:flex-row flex-col px-4 items-center gap-4 bg-[#182159]">
                <div className="w-1/2">
                    <Image className='w-full' src={logo} alt="Logo" />
                </div>
                <div className="text-justify">
                    <h1 className="font-bold text-xl lg:text-start text-center">The ACE</h1>
                    <p className="mt-4 lg:pr-8 pr-0 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum est vitae convallis tristique. Ut condimentum vehicula eros. Vestibulum convallis sollicitudin justo, eget placerat erat. Fusce ut justo massa. </p>
                    <div className="flex lg:flex-row flex-col lg:justify-start justify-center gap-4 my-4">
                        <Button className="flex flex-row  gap-2 rounded-md font-bold text-black">
                            Get Started
                            <ArrowRight color="#000000" />
                        </Button>
                        <Button className="bg-[#182159] text-[#FFAA33] hover:text-black font-bold outline outline-2 outline-[#FFAA33]">Contact</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventComponent
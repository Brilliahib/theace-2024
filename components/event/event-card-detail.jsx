import { ArrowRight, Trophy, Users } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const EventCardDetail = () => {
    return (
        <>
            <div className="flex lg:flex-row flex-col items-center space-x-16">
                {/* gambar kiri */}
                <div className="border-8 border-t-2 border-l-2 rounded-xl border-primary">
                    <div className="relative">
                        <div className="bg-[#0e1333] rounded-xl w-[300px] h-[300px]"></div>
                        <div className="absolute bottom-4 -right-8 rounded-xl bg-primary p-4">
                            <Trophy color='#182159' size={36} />
                        </div>
                    </div>
                </div>
                {/* text kanan */}
                <div className="space-y-4">
                    <h2>EVENT 1</h2>
                    <h2 className="font-bold">Perlombaan</h2>
                    <p className="text-justify">Kami mengundang kalian semua untuk bergabung dalam serangkaian lomba seru dan menantang yang kami adakan! Apakah kalian siap untuk mengasah kemampuan dan menunjukkan bakatmu? Inilah saat yang tepat untuk berpartisipasi dalam lomba berikut.</p>
                    <Button className="flex flex-row gap-2 rounded-md font-bold text-[#041062]">
                        See Details
                        <ArrowRight color="#041062" />
                    </Button>
                </div>
            </div>
            {/* event 2 */}
            <div className="flex lg:flex-row flex-col items-center space-x-16 mt-16">
                {/* text kiri */}
                <div className="space-y-4">
                    <h2>EVENT 2</h2>
                    <h2 className="font-bold">Seminar</h2>
                    <p className="text-justify">Kami mengundang kalian semua untuk bergabung dalam serangkaian lomba seru dan menantang yang kami adakan! Apakah kalian siap untuk mengasah kemampuan dan menunjukkan bakatmu? Inilah saat yang tepat untuk berpartisipasi dalam lomba berikut.</p>
                    <Button className="flex flex-row gap-2 rounded-md font-bold text-[#041062]">
                        See Details
                        <ArrowRight color="#041062" />
                    </Button>
                </div>
                <div className="border-8 border-t-2 border-l-2 rounded-xl border-primary">
                    {/* gambar kanan */}
                    <div className="relative">
                        <div className="bg-[#0e1333] rounded-xl w-[300px] h-[300px]"></div>
                        <div className="absolute bottom-4 -left-8 rounded-xl bg-primary p-4">
                            <Users color='#182159' size={36} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventCardDetail
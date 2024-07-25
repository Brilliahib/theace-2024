import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const CardAlur = () => {
    const caption = [
        {
            step: 'Step 1',
            time: '10 Minutes',
            title: 'Pendaftaran',
            information: 'Kunjungi link dibawah dan isi formulir pendaftaran dengan informasi lengkapmu. Pastikan data yang kamu masukkan benar dan valid.',
            button:
                <Button className="flex flex-row gap-2 rounded-md font-bold text-black h-12">
                    Daftar Sekarang
                    <ArrowRight color="#000000" />
                </Button>
        },
        {
            step: 'Step 2',
            title: 'Pelaksanaan Lomba',
            information: 'Setelah mendaftar, persiapkan diri untuk mengikuti pelaksanaan lomba sesuai dengan jenis lomba yang kalian pilih dan pastikan untuk mengecek timeline yang telah ditentukan.'
        },
        {
            step: 'Step 3',
            title: 'Pengumuman Pemenang',
            information: 'Nantikan pengumuman pemenang  sesuai jenis lomba yang diikuti. Agar tidak ketinggalan informasi mengenai siapa yang menang, pastikan untuk memantau sosial media The Ace.'
        }

    ]
    return (
        <>
            <div className="flex flex-row gap-8 justify-center items-stretch mt-8 pad-x">
                {caption.map((item, index) => (
                    <div key={index} className="bg-[#371A6C] p-6 rounded-md w-1/3 flex flex-col space-y-4">
                        <div>
                            <h1>{item.step}</h1>
                            <h1 className='text-primary'>{item.time}</h1>
                        </div>
                        <div className="flex justify-between">
                            <h1 className='font-bold md:text-3xl text-xl'>
                                {item.title}
                            </h1>
                        </div>
                        <p>{item.information}</p>
                        <div>
                            {item.button}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CardAlur
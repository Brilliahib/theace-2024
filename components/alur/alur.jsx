import React from 'react'
import CardAlur from './card-alur'

const Alur = () => {
    return (
        <>
            <div className="text-center space-y-4 mt-16">
                <h1 className="font-bold text-3xl">
                    Alur Perlombaan
                </h1>
                <p className="text-base">Ikuti alur perlombaan dan jadilah bagian dari perlombaan luar biasa ini!</p>
            </div>
            <CardAlur />
        </>
    )
}

export default Alur
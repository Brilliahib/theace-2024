import React from 'react'

const MiniPicture = () => {
    const images = [
        'https://via.placeholder.com/150', // Ganti dengan URL gambar asli
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
    ]
    return (
        <div className="container mx-auto pad-x my-12">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
                {images.map((image, index) => (
                    <div key={index} className=" outline outline-4 rounded outline-primary ">
                        <img src={image} alt={`Image ${index + 1}`} className="rounded w-full h-auto " />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MiniPicture
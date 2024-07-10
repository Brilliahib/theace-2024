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
        <div className="container mx-auto pad-x mt-4">
            <div className="grid grid-cols-3 gap-12">
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
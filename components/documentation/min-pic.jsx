import React from "react";

const MiniPicture = () => {
  const images = [
    "/images/1.jpg", // Ganti dengan URL gambar asli
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
  ];
  return (
    <div className="pad-x my-12">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-12 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className=" outline outline-4 rounded outline-primary "
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="rounded w-full h-[250px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniPicture;

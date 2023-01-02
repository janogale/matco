import { useState } from "react";
import Container from "../ui/Container";

export const Showroom = ({ images }: { images: any }) => {
 
  return (
    <Container>
       <div className="container mx-auto px-4 py-8">
      <div className="relative bg-gray-900 rounded-lg overflow-hidden">
        {/* Image slider */}
        <div className="relative z-10">
          {images.map((image) => (
            <img
              key={image.src}
              className="absolute h-full w-full object-cover"
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>

        {/* Image thumbnails */}
        <div className="absolute bottom-0 left-0 right-0 py-2 px-4 bg-gray-800">
          <div className="flex justify-between">
            {images.map((image) => (
              <img
                key={image.src}
                className="h-12 w-12 rounded-full object-cover cursor-pointer"
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
};

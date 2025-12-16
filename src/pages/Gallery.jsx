import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
    // Generate array of image objects
    // Assuming images are c1.jpg through c19.jpg
    const images = Array.from({ length: 19 }, (_, i) => ({
        id: i + 1,
        src: `/college-images/c${i + 1}.jpg`,
        alt: `College Function Image ${i + 1}`
    }));

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        College Gallery
                    </h1>
                    <p className="mt-4 text-xl text-gray-500">
                        Glimpses of our vibrant campus life, cultural events, and academic activities.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {images.map((image) => (
                        <div
                            key={image.id}
                            className="group aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-200 shadow-md cursor-pointer hover:shadow-xl transition-all duration-300"
                            onClick={() => setSelectedImage(image)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black bg-opacity-90 backdrop-blur-sm transition-opacity"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="h-8 w-8" />
                    </button>

                    <div
                        className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-h-[85vh] w-auto object-contain"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-center">
                            <p className="text-white text-lg font-medium">{selectedImage.alt}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;

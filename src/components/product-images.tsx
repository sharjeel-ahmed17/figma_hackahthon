"use client"
import Image from 'next/image'
import { useState } from 'react'




interface ProductImagesProps {
  images: string[]
}

export function ProductImages({ images }: ProductImagesProps) {
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="md:col-span-1 col-span-4 md:grid-cols-none grid grid-cols-3 md:space-y-4 space-y-1" >
        {images.map((image, index) => (
          <div 
            key={index}
            className={`cursor-pointer border-2  ${
              selectedImage === image ? 'border-primary' : 'border-transparent'
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <Image src={image} alt={`Product image ${index + 1}`} width={100} height={100} className="w-full h-auto" />
          </div>
        ))}
      </div>
      <div className="md:col-span-3 col-span-4">
        <Image src={selectedImage} alt="Selected product image" width={600} height={600} className="w-full h-auto" />
      </div>
    </div>
  )
}




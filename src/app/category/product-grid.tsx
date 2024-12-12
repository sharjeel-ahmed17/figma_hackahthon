'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const allProducts = [
  { id: 1, name: 'Classic T-Shirt', price: 29.99, image: '/images/like2.png' },
  { id: 2, name: 'Slim Fit Jeans', price: 59.99, image: '/images/like2.png' },
  { id: 3, name: 'Running Shoes', price: 89.99, image: '/images/like2.png' },
  { id: 4, name: 'Leather Wallet', price: 39.99, image: '/images/like2.png' },
  { id: 5, name: 'Sunglasses', price: 49.99, image: '/images/like2.png' },
  { id: 6, name: 'Wristwatch', price: 129.99, image: '/images/like2.png' },
  { id: 7, name: 'Hooded Sweatshirt', price: 54.99, image: '/images/like2.png' },
  { id: 8, name: 'Dress Shirt', price: 69.99, image: '/images/like2.png' },
  { id: 9, name: 'Sneakers', price: 79.99, image: '/images/like2.png' },
  { id: 10, name: 'Backpack', price: 44.99, image: '/images/like2.png' },
  { id: 11, name: 'Beanie', price: 19.99, image: '/images/like2.png' },
  { id: 12, name: 'Scarf', price: 24.99, image: '/images/like2.png' },
]

const ITEMS_PER_PAGE = 6

export default function ProductGrid() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentProducts = allProducts.slice(startIndex, endIndex)

  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(page + 1, totalPages))
  }

  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 1))
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentProducts.map((product) => (
          <Card key={product.id}>
            <CardContent className="p-4">
              <div className="aspect-square relative mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <Button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          variant="outline"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <span className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          variant="outline"
        >
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}


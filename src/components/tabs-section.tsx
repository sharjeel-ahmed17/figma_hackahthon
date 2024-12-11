"use client"
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ReviewSection } from './review-section'
import { ProductDetails } from './product-details'
import { FAQs } from './faqs'

export function TabsSection() {
  const [activeTab, setActiveTab] = useState('reviews')

  return (
    <Tabs defaultValue="reviews" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
        <TabsTrigger value="details">Product Details</TabsTrigger>
        <TabsTrigger value="faqs">FAQs</TabsTrigger>
      </TabsList>
      <TabsContent value="reviews">
        <ReviewSection />
      </TabsContent>
      <TabsContent value="details">
        <ProductDetails />
      </TabsContent>
      <TabsContent value="faqs">
        <FAQs />
      </TabsContent>
    </Tabs>
  )
}


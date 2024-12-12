'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { ChevronDown, Filter } from 'lucide-react'
import ProductGrid from './product-grid'
import FilterSidebar from './filter-sidebar'

export default function ProductListingPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-64">
          <FilterSidebar />
        </div>

        {/* Mobile Filter Button and Full Screen Dialog */}
        <div className="md:hidden mb-4">
          <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">
                <Filter className="mr-2 h-4 w-4" /> Filters
              </Button>
            </DialogTrigger>
            <DialogContent className="w-screen h-screen max-w-none m-0 p-0">
              <DialogTitle className="sr-only">Filters</DialogTitle>
              <div className="h-full overflow-auto p-6">
                <FilterSidebar onApply={() => setIsFilterOpen(false)} />
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className='flex justify-between items-center px-4'>

          <h1 className="text-3xl font-bold mb-6">Casual</h1>
   
<div className='flex'>

          <p>Showing 1-10 of 100 Products Sort by:<span>Most Popular</span> </p>
          <ChevronDown/>
</div>
          </div>
          <ProductGrid />
        </div>
      </div>
    </div>
  )
}


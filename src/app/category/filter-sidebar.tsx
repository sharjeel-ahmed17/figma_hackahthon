import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FilterSidebarProps {
  onApply?: () => void
}

export default function FilterSidebar({ onApply }: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState([0, 1000])

  const handleApply = () => {
    // Apply filter logic here
    onApply?.()
  }

  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="category">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="shirts">
                <AccordionTrigger>Shirts</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {['T-Shirts', 'Dress Shirts', 'Polo Shirts'].map((subCategory) => (
                      <div key={subCategory} className="flex items-center">
                        <Checkbox id={`category-${subCategory}`} />
                        <Label htmlFor={`category-${subCategory}`} className="ml-2">
                          {subCategory}
                        </Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="pants">
                <AccordionTrigger>Pants</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {['Jeans', 'Chinos', 'Shorts'].map((subCategory) => (
                      <div key={subCategory} className="flex items-center">
                        <Checkbox id={`category-${subCategory}`} />
                        <Label htmlFor={`category-${subCategory}`} className="ml-2">
                          {subCategory}
                        </Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="accessories">
                <AccordionTrigger>Accessories</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {['Belts', 'Watches', 'Sunglasses'].map((subCategory) => (
                      <div key={subCategory} className="flex items-center">
                        <Checkbox id={`category-${subCategory}`} />
                        <Label htmlFor={`category-${subCategory}`} className="ml-2">
                          {subCategory}
                        </Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <Slider
              min={0}
              max={1000}
              step={10}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mb-2"
            />
            <div className="flex justify-between text-sm">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="color">
          <AccordionTrigger>Color</AccordionTrigger>
          <AccordionContent>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a color" />
              </SelectTrigger>
              <SelectContent>
                {['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White'].map((color) => (
                  <SelectItem key={color} value={color.toLowerCase()}>
                    {color}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="size">
          <AccordionTrigger>Size</AccordionTrigger>
          <AccordionContent>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a size" />
              </SelectTrigger>
              <SelectContent>
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <SelectItem key={size} value={size.toLowerCase()}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full" onClick={handleApply}>
        Apply Filters
      </Button>
    </div>
  )
}


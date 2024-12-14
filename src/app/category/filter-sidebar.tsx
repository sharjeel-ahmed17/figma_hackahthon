// import { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Label } from "@/components/ui/label"
// import { Slider } from "@/components/ui/slider"
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// interface FilterSidebarProps {
//   onApply?: () => void
// }

// export default function FilterSidebar({ onApply }: FilterSidebarProps) {
//   const [priceRange, setPriceRange] = useState([0, 1000])

//   const handleApply = () => {
//     // Apply filter logic here
//     onApply?.()
//   }

//   return (
//     <div className="space-y-6">
//       <Accordion type="single" collapsible className="w-full">
//         <AccordionItem value="category">
//           <AccordionTrigger>Category</AccordionTrigger>
//           <AccordionContent>
//             <Accordion type="multiple" className="w-full">
//               <AccordionItem value="shirts">
//                 <AccordionTrigger>Shirts</AccordionTrigger>
//                 <AccordionContent>
//                   <div className="space-y-2">
//                     {['T-Shirts', 'Dress Shirts', 'Polo Shirts'].map((subCategory) => (
//                       <div key={subCategory} className="flex items-center">
//                         <Checkbox id={`category-${subCategory}`} />
//                         <Label htmlFor={`category-${subCategory}`} className="ml-2">
//                           {subCategory}
//                         </Label>
//                       </div>
//                     ))}
//                   </div>
//                 </AccordionContent>
//               </AccordionItem>
//               <AccordionItem value="pants">
//                 <AccordionTrigger>Pants</AccordionTrigger>
//                 <AccordionContent>
//                   <div className="space-y-2">
//                     {['Jeans', 'Chinos', 'Shorts'].map((subCategory) => (
//                       <div key={subCategory} className="flex items-center">
//                         <Checkbox id={`category-${subCategory}`} />
//                         <Label htmlFor={`category-${subCategory}`} className="ml-2">
//                           {subCategory}
//                         </Label>
//                       </div>
//                     ))}
//                   </div>
//                 </AccordionContent>
//               </AccordionItem>
//               <AccordionItem value="accessories">
//                 <AccordionTrigger>Accessories</AccordionTrigger>
//                 <AccordionContent>
//                   <div className="space-y-2">
//                     {['Belts', 'Watches', 'Sunglasses'].map((subCategory) => (
//                       <div key={subCategory} className="flex items-center">
//                         <Checkbox id={`category-${subCategory}`} />
//                         <Label htmlFor={`category-${subCategory}`} className="ml-2">
//                           {subCategory}
//                         </Label>
//                       </div>
//                     ))}
//                   </div>
//                 </AccordionContent>
//               </AccordionItem>
//             </Accordion>
//           </AccordionContent>
//         </AccordionItem>

//         <AccordionItem value="price">
//           <AccordionTrigger>Price Range</AccordionTrigger>
//           <AccordionContent>
//             <Slider
//               min={0}
//               max={1000}
//               step={10}
//               value={priceRange}
//               onValueChange={setPriceRange}
//               className="mb-2"
//             />
//             <div className="flex justify-between text-sm">
//               <span>${priceRange[0]}</span>
//               <span>${priceRange[1]}</span>
//             </div>
//           </AccordionContent>
//         </AccordionItem>

//         <AccordionItem value="color">
//           <AccordionTrigger>Color</AccordionTrigger>
//           <AccordionContent>
//             <Select>
//               <SelectTrigger className="w-full">
//                 <SelectValue placeholder="Select a color" />
//               </SelectTrigger>
//               <SelectContent>
//                 {['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White'].map((color) => (
//                   <SelectItem key={color} value={color.toLowerCase()}>
//                     {color}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </AccordionContent>
//         </AccordionItem>

//         <AccordionItem value="size">
//           <AccordionTrigger>Size</AccordionTrigger>
//           <AccordionContent>
//             <Select>
//               <SelectTrigger className="w-full">
//                 <SelectValue placeholder="Select a size" />
//               </SelectTrigger>
//               <SelectContent>
//                 {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
//                   <SelectItem key={size} value={size.toLowerCase()}>
//                     {size}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>

//       <Button className="w-full" onClick={handleApply}>
//         Apply Filters
//       </Button>
//     </div>
//   )
// }

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  SlidersVertical,
} from "lucide-react";
import React from "react";
interface FilterSidebarProps {
  onApply?: () => void
}

const FilterSidebar = ({ onApply }: FilterSidebarProps) => {
    const handleApply = () => {
    // Apply filter logic here
    onApply?.()
  }

  return (
    <div className="max-w-[295px] mx-auto">
      <div className="max-w-[247px] mx-auto">
        {/* filter */}
        <div className="mb-10">
          <div className="flex justify-between mb-5">
            <h2>filter</h2> <SlidersVertical />
          </div>
          <div className="flex justify-between mb-2">
            <h3>t shirt</h3>
            <ChevronRight />
          </div>
          <div className="flex justify-between mb-2">
            <h3>t shirt</h3>
            <ChevronRight />
          </div>
          <div className="flex justify-between mb-2">
            <h3>t shirt</h3>
            <ChevronRight />
          </div>
          <div className="flex justify-between mb-2">
            <h3>t shirt</h3>
            <ChevronRight />
          </div>
          <div className="flex justify-between mb-2">
            <h3>t shirt</h3>
            <ChevronRight />
          </div>
        </div>
        {/* price */}
        <div className="mb-10">
          <div className="flex justify-between">
            <h2>price</h2>
            <ChevronUp />
          </div>
          <Slider min={50} max={1000} step={10} />
        </div>
        {/* colors */}

        <div>
          <div className="flex justify-between mb-5">
            <h2>colors</h2> <ChevronUp />
          </div>
          <div className="flex gap-3 flex-wrap">
            <div className="md:size-[30px] size-[20px] bg-red-700 rounded-full"></div>
            <div className="md:size-[30px] size-[20px] bg-red-700 rounded-full"></div>
            <div className="md:size-[30px] size-[20px] bg-red-700 rounded-full"></div>
            <div className="md:size-[30px] size-[20px] bg-red-700 rounded-full"></div>
            <div className="md:size-[30px] size-[20px] bg-red-700 rounded-full"></div>
            <div className="md:size-[30px] size-[20px] bg-red-700 rounded-full"></div>
            <div className="md:size-[30px] size-[20px] bg-red-700 rounded-full"></div>
            <div className="md:size-[30px] size-[20px] bg-red-700 rounded-full"></div>
            <div className="md:size-[30px] size-[20px] bg-red-700 rounded-full"></div>
            <div className="md:size-[30px] size-[20px] bg-red-700 rounded-full"></div>
            <div className="md:size-[30px] size-[20px] bg-red-700 rounded-full"></div>
          </div>
        </div>

        {/* size */}
        <div className="mb-10">
          <div className="flex justify-between mb-5">
            <h2>size </h2> <ChevronUp />
          </div>

          <div className="flex gap-3 flex-wrap">
            <Button >small</Button>
            <Button >medium</Button>
            <Button >large</Button>
            <Button >small</Button>
            <Button >medium</Button>
            <Button >large</Button>
            <Button >small</Button>
            <Button >medium</Button>
            <Button >large</Button>
          </div>

        </div>
        {/* dress style */}
        <div className="mb-10">
          <div className="flex justify-between mb-5">
            <h2>dress style </h2> <ChevronUp />
          </div>
          <div className="flex justify-between mb-2">
            <h3>t shirt</h3>
            <ChevronRight />
          </div>
          <div className="flex justify-between mb-2">
            <h3>t shirt</h3>
            <ChevronRight />
          </div>
          <div className="flex justify-between mb-2">
            <h3>t shirt</h3>
            <ChevronRight />
          </div>
          <div className="flex justify-between mb-2">
            <h3>t shirt</h3>
            <ChevronRight />
          </div>
          <div className="flex justify-between mb-2">
            <h3>t shirt</h3>
            <ChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;

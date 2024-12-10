import { Star, Check } from 'lucide-react'

interface ReviewCardProps {
  rating: number
  customerName: string
  description: string
  date: string
}

export function ReviewCard({ rating, customerName, description, date }: ReviewCardProps) {
  return (
    <div className="border rounded-lg p-4 space-y-2">
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <span className="font-semibold ">{customerName}</span>
        <div className='size-[20px] rounded-full bg-green-700 flex justify-center items-center'>
            
        <Check className="w-4 h-4 text-white" />
        </div>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-xs text-gray-400">{date}</p>
    </div>
  )
}


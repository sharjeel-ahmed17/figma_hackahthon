'use client'

import { useState, useEffect } from 'react'
import { X, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (!isOpen) {
      setSearchTerm('')
    }
  }, [isOpen])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchTerm)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle className="sr-only">Search</DialogTitle>
        <form onSubmit={handleSearch} className="mt-2">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search..."
              className="w-full bg-gray-900 text-white placeholder-gray-400 rounded-full pr-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
            <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-10 top-0"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close search</span>
            </Button>
          </div>
        </form>
      
      </DialogContent>
    </Dialog>
  )
}


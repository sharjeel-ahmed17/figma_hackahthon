'use client';

import { useState } from 'react';
import { CircleUser, Menu, Search,  ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DialogTitle } from '@/components/ui/dialog';
import Logo from './logo';
import NavItems from './nav-items';
import SearchModal from './search-modal';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 max-w-[1240px] w-full mx-auto h-[41px] px-4 my-5">
      <div className="flex h-full items-center justify-between space-x-4"> {/* Add space-x-4 for gap between sections */}
        
        {/* Left Section: Menu, Logo */}
        <div className="flex items-center space-x-4"> {/* Add space-x-4 for gap between items */}
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
              <NavItems />
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Logo />
        </div>

        {/* Center Section: Navigation Items and Search */}
        <div className="flex items-center space-x-6 flex-1"> {/* Add space-x-6 for larger gap */}
          {/* Navigation Items */}
          <div className="hidden md:flex md:items-center md:space-x-6"> {/* Add space-x-6 for nav items */}
            <NavItems />
          </div>

          {/* Search Bar */}
          <div className="hidden md:block relative flex-grow">
            <Input
              type="search"
              placeholder="Search..."
              className="w-full bg-gray-100 placeholder-gray-400 rounded-full pl-10 pr-4 placeholder:font-satoshi placeholder:text-[16px]"
            />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
          </div>
        </div>

        {/* Right Section: Icons */}
        <div className="flex items-center space-x-4"> {/* Add space-x-4 for gap between icons */}
          {/* Search Icon for Mobile */}
          <Button variant="ghost" size="icon" onClick={openSearch} className="md:hidden">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Shopping Bag Icon */}
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Shopping bag</span>
          </Button>

          {/* User Icon */}
          <Button variant="ghost" size="icon">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">User account</span>
          </Button>
        </div>
      </div>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
    </header>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus, Tag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/lib/utils";

// Mock data for cart items
const initialCartItems = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 29.99,
    quantity: 2,
    image: "/images/like2.png",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 59.99,
    quantity: 1,
    image: "/images/like3.png",
  },
  {
    id: 3,
    name: "Slim Fit Jeans",
    price: 59.99,
    quantity: 1,
    image: "/images/like4.png",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 10; // Fixed shipping cost
  const total = subtotal + shipping;

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 py-4 border-b"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-md"
              />
              <div className="flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <h4>
                  Size : Large <span></span>
                </h4>
                <h4>
                  Color : white<span></span>
                </h4>
                <p className="text-gray-600">{formatCurrency(item.price)}</p>
              </div>
              <div>
                <div className="flex justify-end">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    min="0"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="w-16 text-center"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-1/3">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>discount</span>
                <span>{formatCurrency(shipping)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{formatCurrency(shipping)}</span>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <div className="relative">
                <Input
                  type="text"
                  className="relative pl-8 pr-2 rounded-full bg-grey"
                />
                <Tag className="absolute top-1/2 left-2 transform -translate-y-1/2 text-grey-600" />
              </div>

              <Button className="rounded-full">apply</Button>
            </div>
            <Button className="w-full mt-6 rounded-full">
              go to checkout{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

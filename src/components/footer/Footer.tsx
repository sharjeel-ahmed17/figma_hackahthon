import { Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
   <footer className='bg-red-600 py-40'>
<div className='grid grid-cols-5 gap-2'>
    <div className='p-7 bg-blue-500'>
        <h3>SHOP.CO</h3>
        <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
        <div className='flex gap-3'>
            <div className='bg-white rounded-full size-[28px] flex items-center justify-center'><Twitter size={16} /></div>
        </div>
        <div className='flex gap-3'>
            <div className='bg-white rounded-full size-[28px] flex items-center justify-center'><Twitter size={16} /></div>
        </div>
        <div className='flex gap-3'>
            <div className='bg-white rounded-full size-[28px] flex items-center justify-center'><Twitter size={16} /></div>
        </div>
        <div className='flex gap-3'>
            <div className='bg-white rounded-full size-[28px] flex items-center justify-center'><Twitter size={16} /></div>
        </div>
    </div>
    <div className='p-7 bg-blue-500'></div>
    <div className='p-7 bg-blue-500'></div>
    <div className='p-7 bg-blue-500'></div>
    <div className='p-7 bg-blue-500'></div>
</div>
   </footer>
  )
}

export default Footer
import { navItems } from '@/data/data'
import Link from 'next/link'

export default function NavItems() {
  return (
    <nav className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-6 md:space-y-0">
     {
        navItems.map((item , index)=>(
            
            <NavChild key={index} item={item}/>
        ))
     }
     
    </nav>
  )
}

function NavChild({item}: {item : INavItem}){
    return (
        <Link
        href={item.path}
        className="text-[16px] font-medium transition-colors hover:text-primary font-satoshi "
      >
      {item.label}
      </Link>
    )
}
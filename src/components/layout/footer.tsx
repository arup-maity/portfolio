import Link from 'next/link'
import React from 'react'

const PortfoiloFooter = () => {
   return (
      <div className='w-full container-webx border-t bg-[#F2F4FF] border-gray-200'>
         <div className="pt-10 pb-6">
            <ul className="flex flex-wrap justify-center">
               <li className="tracking-[1px]">
                  <Link href='/' className="text-theme-black hover:text-[#577BFF] text-lg font-lato font-semibold py-2 px-4">About</Link>
               </li>
               <li className="tracking-[1px]">
                  <Link href='/' className="text-theme-black hover:text-[#577BFF] text-lg font-lato font-semibold py-2 px-4">Services</Link>
               </li>
               <li className="tracking-[1px]">
                  <Link href='/' className="text-theme-black hover:text-[#577BFF] text-lg font-lato font-semibold py-2 px-4">Blog</Link>
               </li>
               <li className="tracking-[1px]">
                  <Link href='/' className="text-theme-black hover:text-[#577BFF] text-lg font-lato font-semibold py-2 px-4">Contact</Link>
               </li>
            </ul>
            <div className="text-center py-4">
               <p className='text-theme-black text-base opacity-60'>© 2023 arupmaity.in. All rights reserved.</p>
            </div>
         </div>
      </div>
   )
}

export default PortfoiloFooter
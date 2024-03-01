// Link, Redes sociales, imágenes
import React from 'react'
import { SocialMedia } from '../../../constants'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='fixed-top-0 w-full h-full flex'>
        <div className='flex flex-row gap-3 items-center'>

            {/* <Link href = "/">
                <h1 className='text-black'> Portfolio</h1>
            </Link> */}
            Coming soon. . . Site under construction
        </div>

          {/*secciones*/}
          <div className='absolute flex flex-col'>
            <Link
            href="/skills"
            className='text-lg'
            //My projects
            />
           </div>

        {/*redes sociales*/}

        <div className='flex flex-row'>
        {SocialMedia.map((social) => (
          <img
            key={social.name}
            src={social.src}
            alt={social.name}
            width={60}
            height={60} 
          />
        ))}
      </div>
      
    </div>
  )
}

export default Navbar

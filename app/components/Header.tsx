import { UserButton, UserProfile } from '@clerk/nextjs'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full px-5 bg-cyan-500'>
      <nav className='py-3'>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-lg font-bold text-white'>Clerk Auth</h1>
          </div>
          <div className=''>
            <UserButton />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
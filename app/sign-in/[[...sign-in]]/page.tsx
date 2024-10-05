import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='flex flex-col items-center mt-20'>
      <SignIn />
    </div>
  )
}

export default SignInPage
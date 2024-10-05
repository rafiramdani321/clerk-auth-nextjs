import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className='flex flex-col items-center mt-20'>
      <SignUp />
    </div>
  )  
}

export default SignUpPage
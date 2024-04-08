import { Typography } from 'antd'
import { Link } from 'react-router-dom'
import { SignInForm } from './components'

export const SignIn = () => {
  return (
    <div className='w-full max-w-[543px] mx-auto py-[50px] px-[100px] bg-white rounded-2xl'>
      <div className='flex items-center justify-center'>
        <Typography.Title level={3} className=''>
          LOGO
        </Typography.Title>
      </div>
      <div className='mt-8'>
        <SignInForm />
      </div>
    </div>
  )
}

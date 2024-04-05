import { Typography } from 'antd'
import { Link } from 'react-router-dom'
import { SignInForm } from './components'

export const SignIn = () => {
  return (
    <>
      <div className='flex items-center justify-between'>
        <Typography.Title level={3}>Login</Typography.Title>
        <Link to='/sign-up'>
          <Typography.Link>Don’t have an account?</Typography.Link>
        </Link>
      </div>
      <div className='mt-8'>
        <SignInForm />
      </div>
    </>
  )
}

import { Typography } from 'antd'
import { Link } from 'react-router-dom'
import { SignUpForm } from './components'

export const SignUp = () => {
  return (
    <>
      <div className='flex items-center justify-between'>
        <Typography.Title level={3}>Register</Typography.Title>
        <Link to='/sign-in'>
          <Typography.Link>Already have an account?</Typography.Link>
        </Link>
      </div>
      <div className='mt-8'>
        <SignUpForm />
      </div>
    </>
  )
}

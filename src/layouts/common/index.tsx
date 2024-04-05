import { Typography } from 'antd'
import { Outlet } from 'react-router-dom'

export const CommonLayout = () => {
  return (
    <div className='h-screen w-full bg-layout flex flex-col items-center justify-center'>
      <div className='w-full max-w-[500px] mx-auto p-12 bg-white'>
        <Outlet />
      </div>
      <div className='absolute bottom-0 text-center'>
        <Typography.Paragraph>
          © 2024 Company Name. All right reserved.
        </Typography.Paragraph>
      </div>
    </div>
  )
}

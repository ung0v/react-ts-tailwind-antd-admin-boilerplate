import { Typography } from 'antd'
import { Outlet } from 'react-router-dom'

export const CommonLayout = () => {
  return (
    <div className='h-screen w-full bg-layout flex flex-col items-center justify-center'>
      <Outlet />
      {/* <div className='absolute bottom-0 text-center'>
        <Typography.Paragraph>
          © 2024 Company Name. All right reserved.
        </Typography.Paragraph>
      </div> */}
    </div>
  )
}

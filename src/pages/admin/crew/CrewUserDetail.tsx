import { ArrowLeftOutlined } from '@ant-design/icons'
import { Divider, Typography } from 'antd'
import { Link, useParams } from 'react-router-dom'
import { AdminGetUserProfileResponseDto } from '~/__generated__/types'
import { ALL_PAGE_ROUTES } from '~/constants'
import { formatDate } from '~/helpers'
import { useI18n } from '~/hooks/useI18n'
import { useGetUserDetails } from '../user/user.service'

export const CrewUserDetail = () => {
  const { t } = useI18n()
  const { userId } = useParams()
  const { data } = useGetUserDetails(userId as string)

  const userInfo: Array<{
    label: string
    key: keyof AdminGetUserProfileResponseDto
    render?: (param: string) => React.ReactNode
  }> = [
    {
      label: t('Email'),
      key: 'email'
    },
    {
      label: t('Phone number'),
      key: 'phoneNumber'
    },
    {
      label: t('Name'),
      key: 'name'
    },
    {
      label: t('Country'),
      key: 'country'
    },
    {
      label: t('Gender'),
      key: 'gender'
    },
    {
      label: t('Birth'),
      key: 'dateOfBirth',
      render: (date) => formatDate(date)
    },
    {
      label: t('Introduction'),
      key: 'introduction'
    }
  ]

  return (
    <div>
      <div className='flex items-center'>
        <Link to={ALL_PAGE_ROUTES.ADMIN_CREW_MANAGEMENT}>
          <ArrowLeftOutlined className='text-xl cursor-pointer text-black' />
        </Link>
        <Typography.Title level={3} className='flex-1 text-center'>
          {t('Profile')}
        </Typography.Title>
      </div>
      <Divider />
      <div className='flex flex-col gap-y-8'>
        {userInfo.map((field) => (
          <div className='flex gap-4'>
            <div className='min-w-[240px]'>
              <Typography.Text className='text-base'>
                {field.label}
              </Typography.Text>
            </div>
            <div>
              {field.render
                ? field.render(String(data?.[field.key]))
                : String(data?.[field.key])}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

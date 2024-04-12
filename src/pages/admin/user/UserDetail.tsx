import { Link, useParams } from 'react-router-dom'
import { useGetUserDetails } from './user.service'
import { Divider, Typography } from 'antd'
import { ArrowLeftOutlined, BackwardOutlined } from '@ant-design/icons'
import { useI18n } from '~/hooks/useI18n'
import { AdminGetUserProfileResponseDto } from '~/__generated__/types'
import { formatDate } from '~/helpers'
import { ALL_PAGE_ROUTES } from '~/constants'

export const UserDetail = () => {
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
      label: t('A.k.a'),
      key: 'aka'
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
      label: t('Main position'),
      key: 'type'
    },
    {
      label: t('Introduction'),
      key: 'introduction'
    },
    {
      label: t('Genre'),
      key: 'fields'
    },
    {
      label: t('Debut date'),
      key: 'debutDate',
      render: (date) => formatDate(date)
    },
    {
      label: t('Link'),
      key: 'link',
      render: (link) => (
        <Link to={link} target='_blank'>
          {link}
        </Link>
      )
    },
    {
      label: t('Highlight link'),
      key: 'video',
      render: (link) => (
        <Link to={link} target='_blank'>
          {link}
        </Link>
      )
    }
  ]

  console.log(userInfo)

  return (
    <div>
      <div className='flex'>
        <Link to={ALL_PAGE_ROUTES.ADMIN_USER_MANAGEMENT}>
          <ArrowLeftOutlined className='text-xl cursor-pointer text-black' />
        </Link>
        <Typography.Title level={3} className='flex-1 text-center'>
          Dancer Profile
        </Typography.Title>
      </div>
      <Divider className='border-[#B8B8B8]' />
      <div>
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
      <div className='mt-8'>
        <Typography.Title level={3} className='!mb-8'>
          {t('Career')}
        </Typography.Title>
        <div className='flex flex-col gap-y-8'>
          {data?.activities.map((activity) => (
            <div
              key={activity.id}
              className='p-5 border border-[#B8B8B8] border-solid rounded-lg'
            >
              <div className='flex flex-col gap-[10px]'>
                <Typography.Text>{activity.title}</Typography.Text>
                <Typography.Text>
                  {t('Date')}: {formatDate(activity.createdAt)}
                </Typography.Text>
                <Typography.Text
                // dangerouslySetInnerHTML={{
                //   __html: activity.description
                // }}
                >
                  {activity.description}
                </Typography.Text>
              </div>
            </div>
          ))}
          {/* <div className='flex justify-end'>
            <Typography.Text className='cursor-pointer text-blue'>
              {t('Show more')}
            </Typography.Text>
          </div> */}
        </div>
      </div>
    </div>
  )
}

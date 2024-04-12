import { ArrowLeftOutlined } from '@ant-design/icons'
import { Avatar, Badge, Button, Divider, Typography } from 'antd'
import { Link, useParams } from 'react-router-dom'
import { ALL_PAGE_ROUTES } from '~/constants'
import { useI18n } from '~/hooks/useI18n'
import { useChangeCrew, useGetCrewDetail } from './crew.service'
import { formatDate, pathToUrl } from '~/helpers'
import { Modal } from '~/libs'
import { COMMON_DIALOGS } from '~/contexts'

export const CrewDetail = () => {
  const { t } = useI18n()
  const { crewId } = useParams()
  const { data, refetch } = useGetCrewDetail(crewId)

  const { mutateAsync: changeCrew } = useChangeCrew()

  const onChangeStatus = async (crewId: string, isOfficial: boolean) => {
    const isConfirmed = await Modal.show(COMMON_DIALOGS.CONFIRM, {
      children: isOfficial
        ? t('Are you sure to withdraw this crew official?')
        : t('Are you sure to mark this crew official?')
    })
    if (isConfirmed) {
      await changeCrew({ crewId, isOfficial: !isOfficial })
      refetch()
    }
  }

  return (
    <div>
      <div className='flex items-center'>
        <Link to={ALL_PAGE_ROUTES.ADMIN_CREW_MANAGEMENT}>
          <ArrowLeftOutlined className='text-xl cursor-pointer text-black' />
        </Link>
        <Typography.Title level={3} className='flex-1 text-center'>
          {t('Crew Detail')}
        </Typography.Title>
      </div>
      <Divider />
      <div>
        <div className='flex gap-8'>
          <Avatar
            src={data?.image}
            alt='avtar'
            className='h-[188px] w-[188px]'
          />
          <div className='flex flex-col gap-[10px]'>
            <Typography.Text className='font-bold uppercase'>
              {t('Crew Name')}
            </Typography.Text>
            <span className='flex gap-8'>
              <Typography.Text className='min-w-[240px]'>
                {t('Country')}
              </Typography.Text>
              <Typography.Text>{data?.country}</Typography.Text>
            </span>
            <span className='flex gap-8'>
              <Typography.Text className='min-w-[240px]'>
                {t('Link')}
              </Typography.Text>
              <Link target='_blank' to={String(data?.link)}>
                {data?.link}
              </Link>
            </span>
            <span className='flex gap-8'>
              <Typography.Text className='min-w-[240px]'>
                {t('Foundation date')}
              </Typography.Text>
              <Typography.Text>
                {formatDate(data?.foundationDate)}
              </Typography.Text>
            </span>
            <Link
              to={pathToUrl(ALL_PAGE_ROUTES.ADMIN_CREW_USER_DETAIL, {
                crewId,
                userId: data?.leaderId
              })}
            >
              <span className='flex gap-8'>
                <Typography.Text className='min-w-[240px]'>
                  {t('Crew leader')}
                </Typography.Text>
                <span className='flex items-center'>
                  <Avatar className='h-6 w-6' src={data?.leaderImage} />{' '}
                  <Typography.Text className='underline'>
                    {data?.leaderName}
                  </Typography.Text>
                </span>
              </span>
            </Link>
            <span className='flex gap-8'>
              <Typography.Text className='min-w-[240px]'>
                {t('Genre')}
              </Typography.Text>
              <div className='flex gap-2'>
                {data?.fields?.map((field) => (
                  <Badge
                    count={field}
                    className='[&>sup]:!bg-black [&>sup]:min-h-[25px] [&>sup]:!flex [&>sup]:items-center [&>sup]:!rounded-lg'
                  />
                ))}
              </div>
            </span>
          </div>
          <Button
            type='primary'
            className='ml-auto'
            onClick={() => onChangeStatus(data!.id, data!.isOfficial)}
          >
            {data?.isOfficial
              ? t('Withdraw dancer official')
              : t('Mark as crew official')}
          </Button>
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

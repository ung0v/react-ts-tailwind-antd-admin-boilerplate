import { Switch, TableProps } from 'antd'
import { Link } from 'react-router-dom'
import { ISearchData, Table } from '~/components'
import { ALL_PAGE_ROUTES } from '~/constants'
import { COMMON_DIALOGS } from '~/contexts'
import { formatDate, pathToUrl } from '~/helpers'
import { useI18n } from '~/hooks/useI18n'
import { Modal } from '~/libs'
import { useChangeCrew, useGetCrews } from './crew.service'

export const CrewManagement = () => {
  const { t } = useI18n()
  const { data, isLoading, refetch } = useGetCrews()
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

  const columns: TableProps['columns'] = [
    {
      title: t('Crew Name'),
      key: 'name',
      dataIndex: 'name',
      render: (name, row) => (
        <Link
          className='underline text-black hover:text-black'
          to={pathToUrl(ALL_PAGE_ROUTES.ADMIN_CREW_DETAIL, { crewId: row.id })}
        >
          {name}
        </Link>
      ),
      width: '15%'
    },
    {
      title: t('Leader'),
      key: 'leaderName',
      dataIndex: 'leaderName',
      render: (leaderName, row) => (
        <Link
          className='underline text-black hover:text-black'
          to={pathToUrl(ALL_PAGE_ROUTES.ADMIN_USER_DETAIL, {
            userId: row.leaderId
          })}
        >
          {leaderName}
        </Link>
      ),

      width: '10%'
    },
    {
      title: t('Country'),
      key: 'country',
      dataIndex: 'country',
      ellipsis: true
    },
    {
      title: t('Total members'),
      key: 'Total-members',
      dataIndex: 'members',
      render: (members) => Number(members.length)
    },
    {
      title: t('Foundation date'),
      key: 'foundationDate',
      dataIndex: 'foundationDate',
      render: (date) => formatDate(date)
    },
    {
      title: t('Created Date'),
      key: 'createdAt',
      dataIndex: 'createdAt',
      render: (date) => formatDate(date)
    },
    {
      title: t('Official'),
      key: 'isOfficial',
      dataIndex: 'isOfficial',
      width: '10%',
      render: (_, record) => (
        <Switch value={_} onChange={() => onChangeStatus(record.id, _)} />
      )
    }
  ]

  const searchData: ISearchData[] = [
    {
      label: t('Official'),
      options: [
        {
          name: 'isOfficial',
          type: 'select',
          data: [
            { label: t('All'), value: '' },
            { label: '오피셜', value: true },
            { label: '일반', value: false }
          ]
        }
      ]
    },
    {
      label: t('Search in'),
      options: [
        {
          name: 'searchIn',
          type: 'select',
          data: [
            { label: t('All'), value: 'all' },
            { label: t('Crew Name'), value: 'name' },
            { label: t('Leader'), value: 'leader' },
            { label: t('Country'), value: 'country' }
          ]
        },
        {
          name: 'search',
          type: 'text'
        }
      ]
    }
  ]

  return (
    <Table
      loading={isLoading}
      columns={columns}
      dataSource={data?.data}
      total={data?.metadata.totalRecords}
      searchData={searchData}
      shouldIndexedNumber
    />
  )
}

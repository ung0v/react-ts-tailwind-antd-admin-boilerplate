import { Switch, TableProps } from 'antd'
import { ISearchData, Table } from '~/components'
import { useI18n } from '~/hooks/useI18n'
import { useToast } from '~/hooks/useToast'
import { Modal, useModal } from '~/libs'
import { useChangeCrew, useGetCrews } from './crew.service'
import { formatDate } from '~/helpers'
import { COMMON_DIALOGS } from '~/contexts'

export const CrewManagement = () => {
  const { t } = useI18n()
  const toast = useToast()
  const { data, isLoading, refetch } = useGetCrews()
  const { mutateAsync: changeCrew } = useChangeCrew()

  const onChangeStatus = async (crewId: string, isOfficial: boolean) => {
    const isConfirmed = await Modal.show(COMMON_DIALOGS.CONFIRM, {
      title: 'test'
    })
    if (isConfirmed) {
      await changeCrew({ crewId, isOfficial })
      refetch()
    }
  }

  const columns: TableProps['columns'] = [
    {
      title: t('Crew Name'),
      key: 'name',
      dataIndex: 'name'
    },
    {
      title: t('Leader'),
      key: 'leader',
      dataIndex: 'LeaderName',
      render: (i, row) => {
        return row.leaderName[0]
      }
    },
    {
      title: t('Country'),
      key: 'country',
      dataIndex: 'country'
    },
    {
      title: t('Total members'),
      key: 'Total-members',
      dataIndex: 'members'
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
          name: 'official',
          type: 'select'
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
    />
  )
}

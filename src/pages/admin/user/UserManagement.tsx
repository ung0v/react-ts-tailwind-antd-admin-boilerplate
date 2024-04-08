import { Switch, TableProps } from 'antd'
import { FormModal, ISearchData, Table } from '~/components'
import { useI18n } from '~/hooks/useI18n'
import { useToast } from '~/hooks/useToast'
import { Modal, useModal } from '~/libs'
import { useChangeUser, useGetUsers } from './user.service'
import { formatDate } from '~/helpers'
import { COMMON_DIALOGS } from '~/contexts'

export const UserManagement = () => {
  const { t } = useI18n()
  const toast = useToast()
  const { data, isLoading, refetch } = useGetUsers()
  const { mutateAsync: changeUser } = useChangeUser()

  const onChangeStatus = async (userId: string, isSpecial: boolean) => {
    const isConfirmed = await Modal.show(COMMON_DIALOGS.CONFIRM, {
      title: 'test'
    })
    if (isConfirmed) {
      await changeUser({ userId, isSpecial: !isSpecial })
      refetch()
    }
  }

  const columns: TableProps['columns'] = [
    {
      title: t('Name'),
      key: 'name',
      dataIndex: 'name'
    },
    {
      title: t('A.k.a'),
      key: 'aka',
      dataIndex: 'aka'
    },
    {
      title: t('Gender'),
      key: 'gender',
      dataIndex: 'gender'
    },
    {
      title: t('Country'),
      key: 'country',
      dataIndex: 'country'
    },
    {
      title: t('Phone number'),
      key: 'phoneNumber',
      dataIndex: 'phoneNumber',
      render: (phone, row) => `${row.countryCode || ''} ${phone || ''}`
    },
    {
      title: t('Mail'),
      key: 'email',
      dataIndex: 'email'
    },
    {
      title: t('Dancer since'),
      key: 'debutDate',
      dataIndex: 'debutDate',
      render: (date) => formatDate(date)
    },
    {
      title: t('Special'),
      key: 'isSpecial',
      dataIndex: 'isSpecial',
      width: '10%',
      render: (_, record) => (
        <Switch value={_} onChange={() => onChangeStatus(record.id, _)} />
      )
    }
  ]

  const searchData: ISearchData[] = [
    {
      label: t('Special'),
      options: [
        {
          name: 'special',
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
            { label: t('all'), value: 'all' },
            { label: t('A.k.a'), value: 'aka' },
            { label: t('Country'), value: 'country' },
            { label: t('Gender'), value: 'gender' },
            { label: t('Phone number'), value: 'phone' },
            { label: t('Mail'), value: 'mail' }
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

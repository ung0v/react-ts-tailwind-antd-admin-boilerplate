import { Switch, TableProps } from 'antd'
import { ISearchData, Table } from '~/components'
import { COMMON_DIALOGS } from '~/contexts'
import { formatDate, pathToUrl } from '~/helpers'
import { useI18n } from '~/hooks/useI18n'
import { Modal } from '~/libs'
import { useChangeUser, useGetUsers } from './user.service'
import { Link } from 'react-router-dom'
import { ALL_PAGE_ROUTES } from '~/constants'

export const UserManagement = () => {
  const { t } = useI18n()
  const { data, isLoading, refetch } = useGetUsers()
  const { mutateAsync: changeUser } = useChangeUser()

  const onChangeStatus = async (userId: string, isSpecial: boolean) => {
    const isConfirmed = await Modal.show(COMMON_DIALOGS.CONFIRM, {
      children: isSpecial
        ? t('Are you sure to withdraw this dancer special?')
        : t('Are you sure to mark this dancer special?')
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
      dataIndex: 'name',
      render: (name, row) => (
        <Link
          className='underline text-black hover:text-black'
          to={pathToUrl(ALL_PAGE_ROUTES.ADMIN_USER_DETAIL, { userId: row.id })}
        >
          {name}
        </Link>
      ),
      width: '15%'
    },
    {
      title: t('A.k.a'),
      key: 'aka',
      dataIndex: 'aka',
      width: '10%'
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
      // width: '15%'
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
          name: 'isSpecial',
          type: 'select',
          data: [
            { label: t('All'), value: '' },
            { label: '스페셜', value: true },
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
      shouldIndexedNumber
    />
  )
}

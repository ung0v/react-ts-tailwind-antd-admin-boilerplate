import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Flex, Modal as ModalAntd, TableProps } from 'antd'
import { FormModal, Table } from '~/components'
import { useToast } from '~/hooks/useToast'
import { useModal } from '~/libs'
import { BrandSchemaType } from '~/types'
import {
  useCreateBrand,
  useDeleteBrand,
  useEditBrand,
  useGetBrands
} from './brand.service'
import { CreateNewBrand } from './components'
import { useI18n } from '~/hooks/useI18n'

export const Brand = () => {
  const { t } = useI18n()
  const toast = useToast()
  const modal = useModal(FormModal)
  const { data, isLoading, refetch } = useGetBrands()
  const { mutateAsync: createBrand } = useCreateBrand()
  const { mutateAsync: editBrand } = useEditBrand()
  const { mutateAsync: deleteBrand } = useDeleteBrand()

  const onCreate = () => {
    modal.show({
      children: <CreateNewBrand />,
      title: 'Create New Brand',
      initialValues: { name: '', description: '' },
      onSubmit: createBrand,
      onAfterSubmit: () => {
        toast('Created Successfully!')
        refetch()
      }
    })
  }

  const onEdit = (record: BrandSchemaType) => {
    modal.show({
      children: <CreateNewBrand />,
      title: 'Edit Brand',
      initialValues: { name: record.name, description: record.description },
      onSubmit: (values) => editBrand({ ...values, id: record.id }),
      onAfterSubmit: () => {
        // toast('Edit Successfully!')
        refetch()
      }
    })
  }

  const onDelete = (id: string) => {
    ModalAntd.confirm({
      content: 'Are you sure to delete this?',
      onOk: async () => {
        await deleteBrand({ id })
        // toast('Delete Successfully!')
        refetch()
      }
    })
  }

  const columns: TableProps['columns'] = [
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'name'
    },
    {
      title: 'Description',
      key: 'description',
      dataIndex: 'description'
    },
    {
      title: 'Actions',
      key: 'actions',
      dataIndex: 'actions',
      width: '20%',
      render: (_, record) => (
        <Flex gap={8}>
          <Button icon={<EditOutlined />} onClick={() => onEdit(record)} />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => onDelete(record.id)}
          />
        </Flex>
      )
    }
  ]

  const renderTopRightActions = () => {
    return (
      <>
        <Button icon={<PlusOutlined />} type='primary' onClick={onCreate}>
          {t('A.k.a')}
        </Button>
      </>
    )
  }

  return (
    <Table
      renderTopRightActions={renderTopRightActions}
      loading={isLoading}
      columns={columns}
      dataSource={data?.data}
      total={data?.pagination.total}
    />
  )
}

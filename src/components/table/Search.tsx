/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Divider, Form, Input, Select, Typography } from 'antd'
import { useEffect } from 'react'
import { useI18n } from '~/hooks/useI18n'
import { useSearch } from '~/hooks/useSearch'
import { useSearchStore } from '~/stores'
import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'

type SearchProps = {
  searchData: ISearchData[]
  total?: number
}

export type ISearchType = 'select' | 'text' | 'radio' | 'date'

export interface ISearchData {
  label: string
  options: ISearchItem[]
}

export interface ISearchItem {
  type: ISearchType
  name: string
  data?: Array<{ label: string; value: string | number }>
  placeholder?: string
}

const KEY_SEARCH = {
  page: 'page',
  pageSize: 'limit'
}

const DEFAULT_VALUE = {
  SEARCH_KEY: '',
  PAGE_START: 0,
  PAGE_SIZE: 10,
  SELECTED_ROW_KEYS: []
}

export const SearchTable = ({ searchData, total = 0 }: SearchProps) => {
  const { t } = useI18n()
  const { currentSearchParams, appendParams } = useSearch()
  const { page, limit: pageSize } = currentSearchParams

  const [form] = Form.useForm()
  const formValues = Form.useWatch([], { form, preserve: true })

  const renderInput = (input: ISearchItem) => {
    switch (input.type) {
      case 'select':
        return <Select className='min-w-[160px]' options={input.data} />
      case 'text':
        return <Input />
      default:
        break
    }
  }

  const handleSearch = () => {
    if (Object.values(formValues).length) {
      appendParams({
        [KEY_SEARCH.page]: DEFAULT_VALUE.PAGE_START,
        ...formValues
      })
    }
  }

  useEffect(() => {
    const keys = Object.keys(form.getFieldsValue())
    if (keys.length) {
      for (const key of keys) {
        form.setFieldValue(key, currentSearchParams[key])
      }
    }
  }, [])

  const handleChangePageSize = (pageSize: number) => {
    appendParams({ [KEY_SEARCH.pageSize]: pageSize })
  }

  const items: MenuProps['items'] = [
    {
      label: t('{{page}} results/page', { page: 10 }),
      key: '10'
    },
    {
      label: t('{{page}} results/page', { page: 50 }),
      key: '50'
    },

    {
      label: t('{{page}} results/page', { page: 100 }),
      key: '100'
    }
  ]

  console.log(pageSize)

  return (
    <>
      <Form form={form} name='search'>
        <div className='grid grid-cols-2'>
          <div className='flex flex-col gap-y-4'>
            {searchData.map((item) => (
              <div key={item.label} className='flex items-center gap-x-4'>
                <Typography.Title level={5} className='min-w-[80px]'>
                  {item.label}
                </Typography.Title>
                {item.options.map((option) => (
                  <Form.Item key={option.name} name={option.name} noStyle>
                    {renderInput(option)}
                  </Form.Item>
                ))}
              </div>
            ))}
          </div>
          <div className='flex items-center justify-center'>
            <Button htmlType='submit' type='primary' onClick={handleSearch}>
              Search
            </Button>
          </div>
        </div>
      </Form>
      <div className=''>
        {t('Have ({{total}}) Result', { total })} <Divider type='vertical' />
        {t('Show')}:{' '}
        <Dropdown
          menu={{
            items,
            selectable: true,
            selectedKeys: [String(pageSize)],
            onClick: (props) => handleChangePageSize(Number(props.key))
          }}
          trigger={['click']}
        >
          <a onClick={(e) => e.preventDefault()}>
            {
              (items as any).find(
                (item: any) => String(item?.key) === String(pageSize)
              )?.label
            }{' '}
            <DownOutlined />
          </a>
        </Dropdown>
      </div>
    </>
  )
}

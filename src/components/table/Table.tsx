/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MenuProps, TableProps as TableAntdProps } from 'antd'
import { Divider, Dropdown, Space, Table as TableAntd } from 'antd'
import React, { useCallback, useMemo, useState } from 'react'
import { useSearchStore } from '~/stores'
import { Pagination } from './Pagination'
import { ISearchData, SearchTable } from './Search'
import { useI18n } from '~/hooks/useI18n'
import { DownOutlined } from '@ant-design/icons'

const KEY_SEARCH = {
  search: 'q',
  page: 'page',
  pageSize: 'limit'
}

const DEFAULT_VALUE = {
  SEARCH_KEY: '',
  PAGE_START: 0,
  PAGE_SIZE: 10,
  SELECTED_ROW_KEYS: []
}

type TableProps<T> = TableAntdProps<T> & {
  total?: number
  renderTopRightActions?: () => React.ReactNode
  shouldIndexedNumber?: boolean
  searchData: ISearchData[]
}

export const Table = <T extends object>({
  total,
  renderTopRightActions,
  shouldIndexedNumber,
  searchData,
  ...props
}: TableProps<T>) => {
  const { t, i18n } = useI18n()
  const [searchKey, setSearchKey] = useState<string>(DEFAULT_VALUE.SEARCH_KEY)

  const { setSearchStates } = useSearchStore()

  const handleChangeSearch = useCallback(
    ({
      key,
      value
    }: {
      key: string
      value: string | number | boolean | string[]
    }) => {
      setSearchStates(key, value)
    },
    []
  )

  // reset page when filter or search
  const handleReset = () => {
    handleChangeSearch({
      key: KEY_SEARCH.page,
      value: DEFAULT_VALUE.PAGE_START
    })
    setCurrentPage(DEFAULT_VALUE.PAGE_START)
  }

  const [pageSize, setPageSize] = useState<number | string>(
    DEFAULT_VALUE.PAGE_SIZE
  )

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>(
    DEFAULT_VALUE.SELECTED_ROW_KEYS
  )
  const [currentPage, setCurrentPage] = useState<number>(
    DEFAULT_VALUE.PAGE_START
  )

  const handleChangePagination = (page: number) => {
    setCurrentPage(page)
    handleChangeSearch({ key: KEY_SEARCH.page, value: page - 1 })
  }

  const handleChangePageSize = (pageSize: number) => {
    setPageSize(pageSize)
    handleChangeSearch({ key: KEY_SEARCH.pageSize, value: pageSize })
  }

  const handleSearchKeyword = (keyword: string) => {
    handleChangeSearch({ key: KEY_SEARCH.search, value: keyword })
    handleReset()
  }

  const handleChangeSearchKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value)
  }

  const items: MenuProps['items'] = [
    {
      label: t('10 results/page'),
      key: 10
    },
    {
      label: t('10 results/page'),
      key: 50
    },

    {
      label: t('10 results/page'),
      key: 100
    }
  ]

  const columns = useMemo(
    () => [
      {
        title: t('No'),
        key: 'no',
        dataIndex: 'no',
        render: (_: any, __: any, idx: number) => {
          console.log(idx)
          return idx + 1
        }
      },
      ...(props.columns as any)
    ],
    [shouldIndexedNumber, props.columns, i18n.language, currentPage]
  )

  return (
    <div>
      <div></div>
      <div className='space-y-4'>
        {/* <div className='mb-6 flex justtify-between'>
        {renderTopRightActions?.()}
        
      </div> */}
        <SearchTable searchData={searchData} />
        <div className=''>
          {t('Have (300) Result')} <Divider type='vertical' />
          {t('Show')}:{' '}
          <Dropdown
            menu={{
              items,
              selectable: true,
              defaultSelectedKeys: ['10'],
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
        <TableAntd {...props} columns={columns} pagination={false} />
        {Number(total) > 0 && (
          <div className='flex justify-center'>
            <Pagination
              current={currentPage}
              total={Number(total)}
              pageSize={Number(pageSize)}
              onChange={handleChangePagination}
            />
          </div>
        )}
      </div>
    </div>
  )
}

import type { TableProps as TableAntdProps } from 'antd'
import { Table as TableAntd } from 'antd'
import React, { useCallback, useState } from 'react'
import { useSearchStore } from '~/stores'
import { Pagination } from './Pagination'
import { SearchInput } from './Search'

const KEY_SEARCH = {
  search: 'q',
  page: 'page',
  pageSize: 'limit'
}

const DEFAULT_VALUE = {
  SEARCH_KEY: '',
  PAGE_START: 1,
  PAGE_SIZE: 10,
  SELECTED_ROW_KEYS: []
}

type TableProps<T> = TableAntdProps<T> & {
  total?: number
  renderTopRightActions?: () => React.ReactNode
}

export const Table = <T extends object>({
  total,
  renderTopRightActions,
  ...props
}: TableProps<T>) => {
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

  const [pageSize, setPageSize] = useState<number>(DEFAULT_VALUE.PAGE_SIZE)

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>(
    DEFAULT_VALUE.SELECTED_ROW_KEYS
  )
  const [currentPage, setCurrentPage] = useState<number>(
    DEFAULT_VALUE.PAGE_START
  )

  const handleChangePagination = (page: number) => {
    setCurrentPage(page)
    handleChangeSearch({ key: KEY_SEARCH.page, value: page })
  }

  const handleSearchKeyword = (keyword: string) => {
    handleChangeSearch({ key: KEY_SEARCH.search, value: keyword })
    handleReset()
  }

  const handleChangeSearchKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value)
  }

  return (
    <div className='space-y-4'>
      <div className='mb-6 flex justify-between'>
        <SearchInput
          onSearch={handleSearchKeyword}
          value={searchKey}
          onChange={handleChangeSearchKey}
        />
        {renderTopRightActions?.()}
      </div>
      <TableAntd {...props} pagination={false} />
      {Number(total) > 0 && (
        <div className='flex justify-end'>
          <Pagination
            current={currentPage}
            total={total}
            onChange={handleChangePagination}
          />
        </div>
      )}
    </div>
  )
}

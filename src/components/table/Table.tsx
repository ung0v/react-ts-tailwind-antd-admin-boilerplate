/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TableProps as TableAntdProps } from 'antd'
import { Table as TableAntd } from 'antd'
import React, { useCallback, useMemo, useState } from 'react'
import { useI18n } from '~/hooks/useI18n'
import { useSearch } from '~/hooks/useSearch'
import { useSearchStore } from '~/stores'
import { Pagination } from './Pagination'
import { ISearchData, SearchTable } from './Search'

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
  const {
    appendParams,
    currentSearchParams: { page: currentPage, limit: pageSize }
  } = useSearch()
  const { t, i18n } = useI18n()

  const handleChangeSearch = useCallback(
    ({
      key,
      value
    }: {
      key: string
      value: string | number | boolean | string[]
    }) => {
      appendParams({ [key]: value })
    },
    []
  )

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>(
    DEFAULT_VALUE.SELECTED_ROW_KEYS
  )

  const handleChangePagination = (page: number) => {
    handleChangeSearch({ key: KEY_SEARCH.page, value: page - 1 })
  }

  const columns = useMemo(() => {
    let finalColumns = props.columns?.map((column) => ({
      ...column,
      align: column.align || 'center'
    })) as any
    if (shouldIndexedNumber) {
      finalColumns = [
        {
          title: t('No'),
          key: 'no',
          dataIndex: 'no',
          render: (_: any, __: any, idx: number) => {
            return (currentPage <= 0 ? 0 : currentPage) * 10 + idx + 1
          },
          width: '10%',
          align: 'center'
        },
        ...finalColumns
      ]
    }
    return finalColumns
  }, [shouldIndexedNumber, props.columns, i18n.language, currentPage])

  return (
    <div>
      <div></div>
      <div className='space-y-4'>
        {/* <div className='mb-6 flex justtify-between'>
        {renderTopRightActions?.()}
        
      </div> */}
        <SearchTable searchData={searchData} total={total} />

        <TableAntd {...props} columns={columns} pagination={false} />
        {Number(total) > 0 && (
          <div className='flex justify-center'>
            <Pagination
              current={Number(currentPage) + 1}
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

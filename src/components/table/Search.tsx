import { Input } from 'antd'
import type { SearchProps } from 'antd/es/input/Search'

const { Search } = Input

export const SearchInput = (props: SearchProps) => {
  const onSearch: SearchProps['onSearch'] = (...params) => {
    props?.onSearch?.(...params)
  }
  return (
    <Search
      placeholder='Search...'
      allowClear
      onSearch={onSearch}
      style={{ width: 400 }}
    />
  )
}

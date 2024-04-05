/* eslint-disable @typescript-eslint/no-explicit-any */
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Flex, Typography } from 'antd'
import { useState } from 'react'

const items: any = [
  {
    key: 'en',
    label: 'English'
  },

  {
    key: 'ko',
    label: 'Korean'
  }
]

export const MenuLanguage: React.FC = () => {
  const [active, setActive] = useState<string>(String(items[0]?.key))
  return (
    <Dropdown
      menu={{
        activeKey: active,
        items,
        selectable: true,
        defaultSelectedKeys: [String(items[0]?.key)],
        onClick: (props) => setActive(props.key)
      }}
      trigger={['click']}
    >
      <Flex gap={4}>
        <Typography className='cursor-pointer'>
          {items.find((item: any) => item?.key === active)?.label}
        </Typography>
        <DownOutlined />
      </Flex>
    </Dropdown>
  )
}

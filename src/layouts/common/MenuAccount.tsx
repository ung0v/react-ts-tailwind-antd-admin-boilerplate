import { UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'
import React from 'react'
import { useLogout } from '~/hooks/useLogout'

export const MenuAccount: React.FC = () => {
  const logout = useLogout()

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Logout',
      onClick: logout
    }
  ]

  return (
    <Dropdown menu={{ items }} trigger={['click']} className='flex p-2'>
      <a onClick={(e) => e.preventDefault()}>
        <UserOutlined className='text-base text-black' />
      </a>
    </Dropdown>
  )
}

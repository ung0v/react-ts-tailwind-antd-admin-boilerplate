/* eslint-disable @typescript-eslint/no-explicit-any */
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Flex, MenuProps, Typography } from 'antd'
import { useState } from 'react'
import { useI18n } from '~/hooks/useI18n'
import { useUserStore } from '~/stores'

export const MenuLanguage: React.FC = () => {
  const { i18n } = useI18n()
  const user = useUserStore()

  const items: MenuProps['items'] = [
    {
      key: 'en',
      label: 'English'
    },

    {
      key: 'ko',
      label: 'Korean'
    }
  ]

  const [active, setActive] = useState<string>(String(items[0]?.key))

  const handleChangeLanguage = (selectedKey: any) => {
    setActive(selectedKey)
    user.setLocale(selectedKey)
  }

  return (
    <Dropdown
      menu={{
        activeKey: active,
        items,
        selectable: true,
        defaultSelectedKeys: [String(items[0]?.key)],
        onClick: (props) => handleChangeLanguage(props.key)
      }}
      trigger={['click']}
    >
      <Flex gap={4}>
        <Typography className='cursor-pointer'>
          {(items as any).find((item: any) => item?.key === active)?.label}
        </Typography>
        <DownOutlined />
      </Flex>
    </Dropdown>
  )
}

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TagsOutlined,
  UserOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Breadcrumb, Button, Layout, Menu, Typography, theme } from 'antd'
import React, { useMemo, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { ALL_PAGE_ROUTES } from '~/constants'
import { usePathname } from '~/hooks/usePathname'
import { MenuLanguage } from '../common/MenuLanguage'
import { useSearchStore, useSharedStore, useUserStore } from '~/stores'
import { useMenuTitle } from '~/hooks/useMenuTitle'
import { useLogout } from '~/hooks/useLogout'
import { MenuAccount } from '../common/MenuAccount'

const { Header, Content, Footer, Sider } = Layout

const SIDER_WITH = 200
const SIDER_WITH_COLLAPSED = 80

const items: MenuProps['items'] = [
  {
    key: ALL_PAGE_ROUTES.ADMIN_USER_MANAGEMENT,
    icon: <UserOutlined />,
    label: `User Management`
  }
]

export const AdminLayout = () => {
  const navigate = useNavigate()
  useMenuTitle()
  const [collapsed, setCollapsed] = useState(false)

  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  const pathname = usePathname()
  const { title } = useSharedStore()
  const { reset } = useSearchStore()
  const user = useUserStore()
  const logout = useLogout()

  const selectedKeys = useMemo(() => {
    return [items.find((item) => item?.key === pathname)?.key as string]
  }, [pathname])

  const handleSelectMenu = (key: string) => {
    navigate(key)
    reset()
  }

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0
        }}
        className='!bg-white'
        trigger={null}
        collapsed={collapsed}
      >
        <div className='h-14 flex items-center justify-center'>
          <Typography.Title level={4} className='text-center'>
            Logo
          </Typography.Title>
        </div>
        <Menu
          theme='light'
          mode='inline'
          selectedKeys={selectedKeys}
          items={items}
          onClick={(item) => handleSelectMenu(item.key)}
        />
      </Sider>
      <Layout
        style={{
          marginLeft: collapsed ? SIDER_WITH_COLLAPSED : SIDER_WITH,
          transition: 'all 200ms'
        }}
      >
        <Header className='h-[60px] bg-white px-6 flex items-center justify-between'>
          {/* <Button
            type='link'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className='h-14 w-14 text-black hover:!text-black'
          /> */}
          <Typography.Title level={5}>{title}</Typography.Title>

          <div className='flex items-center gap-x-6'>
            <Typography.Text>Hi, {user.username}</Typography.Text>
            <MenuAccount />
            <MenuLanguage />
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 'calc(100vh - 60px - 48px)',
            borderRadius: borderRadiusLG,
            background: 'white'
          }}
        >
          <div
            style={
              {
                // padding: 16,
                // borderRadius: borderRadiusLG
              }
            }
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

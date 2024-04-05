/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import { jwtDecode } from 'jwt-decode'
import _ from 'lodash'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useUserStore } from '~/stores'
import { useSignIn } from '../sign-in.service'

export const SignInForm = () => {
  const [searchParams] = useSearchParams()
  const returnUrl = searchParams.get('returnUrl')
  const navigate = useNavigate()
  const { mutateAsync, isPending } = useSignIn()
  const { setToken, setUserStates } = useUserStore()
  const [form] = Form.useForm()
  const onFinish = (formValues: any) => {
    mutateAsync(_.pick(formValues, ['username', 'password']))
      .then((res) => {
        if (res.data) {
          const { access_token: accessToken, refresh_token: refreshToken } =
            res.data
          const {
            Name: name,
            Email: email,
            Username: username,
            Address: address,
            RoleID: role
          }: any = jwtDecode(accessToken) || {}
          setToken({ accessToken, refreshToken })
          setUserStates({ isLogin: true, name, email, username, address, role })
          if (returnUrl) {
            navigate(new URL(returnUrl).pathname)
          }
        }
      })
      .catch(() => {
        form.setFields([
          {
            name: ['password'],
            errors: ['Wrong username or password.']
          }
        ])
      })
  }

  return (
    <Form
      form={form}
      name='normal_login'
      className='login-form'
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name='username'
        rules={[
          {
            required: true,
            message: 'Please input your username.'
          }
        ]}
      >
        <Input
          prefix={<UserOutlined className='site-form-item-icon' />}
          placeholder='Username'
        />
      </Form.Item>
      <Form.Item
        name='password'
        rules={[{ required: true, message: 'Please input your password.' }]}
      >
        <Input.Password
          prefix={<LockOutlined className='site-form-item-icon' />}
          placeholder='Password'
        />
      </Form.Item>
      <Form.Item>
        <div className='w-full flex justify-between'>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Link className='login-form-forgot' to='/forgot-password'>
            Forgot password
          </Link>
        </div>
      </Form.Item>

      <Form.Item>
        <Button loading={isPending} type='primary' htmlType='submit' block>
          Log in
        </Button>
      </Form.Item>
    </Form>
  )
}

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import { jwtDecode } from 'jwt-decode'
import _ from 'lodash'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useUserStore } from '~/stores'
import { useSignIn } from '../sign-in.service'
import { ALL_PAGE_ROUTES, EMAIL_REGEX } from '~/constants'
import { SubmitButton } from '~/components'

export const SignInForm = () => {
  const [searchParams] = useSearchParams()
  const returnUrl = searchParams.get('returnUrl')
  const navigate = useNavigate()
  const { mutateAsync, isPending } = useSignIn()
  const { setToken, setUserStates } = useUserStore()

  const [form] = Form.useForm()

  const onFinish = (formValues: any) => {
    mutateAsync(_.pick(formValues, ['userName', 'password']))
      .then((res) => {
        if (res) {
          const { accessToken, refreshToken } = res

          setToken({ accessToken, refreshToken })
          setUserStates({ isLogin: true })
          if (returnUrl) {
            navigate(new URL(returnUrl).pathname)
          }
          navigate(ALL_PAGE_ROUTES.ADMIN_USER_MANAGEMENT)
        }
      })
      .catch(() => {
        form.setFields([
          {
            name: ['password'],
            errors: ['Email or password is incorrect. Please check again']
          }
        ])
      })
  }

  return (
    <Form
      form={form}
      name='normal_login'
      className='login-form'
      initialValues={{ userName: '', password: '' }}
      onFinish={onFinish}
      layout='vertical'
    >
      <Form.Item
        label='Email'
        name='userName'
        rules={[
          {
            // pattern: EMAIL_REGEX,
            required: true,
            message: 'Email is invalid. Please check again'
          }
        ]}
        className='font-bold'
        required
      >
        <Input
          prefix={<UserOutlined className='mr-4 text-base' />}
          placeholder='Email'
        />
      </Form.Item>
      <Form.Item
        label='Password'
        name='password'
        rules={[{ required: true, message: 'Please input your password.' }]}
        className='font-bold'
      >
        <Input.Password
          prefix={<LockOutlined className='mr-4 text-base' />}
          placeholder='Password'
        />
      </Form.Item>

      <Form.Item>
        <SubmitButton
          form={form as any}
          loading={isPending}
          type='primary'
          htmlType='submit'
          block
        >
          Log in
        </SubmitButton>
      </Form.Item>
    </Form>
  )
}

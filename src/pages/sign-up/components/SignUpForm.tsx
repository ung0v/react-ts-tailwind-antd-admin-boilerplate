/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CheckSquareOutlined,
  EnvironmentOutlined,
  LockOutlined,
  MailOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Select, message } from 'antd'
import _ from 'lodash'
import {
  ALL_PAGE_ROUTES,
  PASSWORD_REGEX,
  PHONE_NUMBER_REGEX,
  USERNAME_REGEX
} from '~/constants'
import { useSignUp } from '../hooks/useSignUp'
import { useNavigate } from 'react-router-dom'

const { Option } = Select

export const SignUpForm = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm()

  const { mutateAsync, isPending } = useSignUp()

  const onFinish = (formValues: any) => {
    console.log('Received formValues of form: ', formValues)
    mutateAsync({
      ..._.omit(formValues, ['prefix', 'agreement'])
      // telephone: `${formValues.prefix}${formValues.telephone}`
    })
      .then(() => {
        message.success('Register successfully.')
        navigate(ALL_PAGE_ROUTES.SIGN_UP)
      })
      .catch((error) => {
        if (error.statusCode === 400) {
          form.setFields([
            {
              name: 'username',
              errors: ['Username already existed.']
            }
          ])
        }
      })
  }

  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select style={{ width: 70 }}>
        <Option value='82'>+82</Option>
        <Option value='84'>+84</Option>
        <Option value='86'>+86</Option>
        <Option value='87'>+87</Option>
      </Select>
    </Form.Item>
  )

  return (
    <Form
      layout='vertical'
      form={form}
      name='register'
      onFinish={onFinish}
      initialValues={{
        prefix: '82'
      }}
      scrollToFirstError
    >
      <Form.Item
        name='name'
        label='Full Name'
        rules={[
          {
            required: true,
            message: 'Please input your full name.'
          }
        ]}
      >
        <Input placeholder='Full Name' />
      </Form.Item>

      <Form.Item
        name='username'
        label='Username'
        rules={[
          {
            required: true,
            message: 'Please input your username.'
          },
          {
            pattern: USERNAME_REGEX,
            message:
              'Username must be between 3 and 20 characters long, contain only letters, numbers, underscores, or hyphens and start with a letter.'
          }
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder='Username' />
      </Form.Item>

      <Form.Item
        name='email'
        label='E-mail'
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail.'
          },
          {
            required: true,
            message: 'Please input your E-mail.'
          }
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder='Email' />
      </Form.Item>

      <Form.Item
        name='password'
        label='Password'
        rules={[
          {
            required: true,
            message: 'Please input your password.'
          },
          {
            pattern: PASSWORD_REGEX,
            message:
              'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.'
          }
        ]}
        // hasFeedback
      >
        <Input.Password prefix={<LockOutlined />} placeholder='Password' />
      </Form.Item>

      <Form.Item
        name='repassword'
        label='Confirm Password'
        dependencies={['password']}
        // hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password.'
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(
                new Error('The new password that you entered do not match.')
              )
            }
          })
        ]}
      >
        <Input.Password
          prefix={<CheckSquareOutlined />}
          placeholder='Confirm Password'
        />
      </Form.Item>

      <Form.Item
        name='telephone'
        label='Phone Number'
        rules={[
          { required: true, message: 'Please input your phone number.' },
          {
            pattern: PHONE_NUMBER_REGEX,
            message: 'The input is not valid phone number.'
          }
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          // prefix={<PhoneOutlined />}
          placeholder='Phone Number'
        />
      </Form.Item>

      <Form.Item
        name='address'
        label='Address'
        rules={[
          {
            required: true,
            message: 'Please input your address.'
          }
        ]}
      >
        <Input prefix={<EnvironmentOutlined />} placeholder='Address' />
      </Form.Item>

      <Form.Item
        name='agreement'
        valuePropName='checked'
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error('Should accept agreement'))
          }
        ]}
      >
        <Checkbox>I have read the terms and conditions</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button loading={isPending} type='primary' htmlType='submit' block>
          Register
        </Button>
      </Form.Item>
    </Form>
  )
}

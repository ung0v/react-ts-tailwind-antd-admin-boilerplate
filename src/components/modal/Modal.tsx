/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FormProps, ModalProps as ModalAntdProps } from 'antd'
import { Button, Form, Modal as ModalAntd } from 'antd'
import { useState } from 'react'
import { Modal, antdModalV5, useModal } from '~/libs'
import './Modal.css'

type ModalProps = ModalAntdProps & {
  // TODO
  children: React.ReactNode
}

interface FormModalProps<T extends object> extends ModalAntdProps {
  // TODO
  children: React.ReactNode
  initialValues: T
  formProps?: FormProps
  onSubmit: (formValues: any) => Promise<any>
  onAfterSubmit?: () => void
}

export const CommonModal = Modal.create(
  ({ children, onCancel, onOk, ...props }: ModalProps) => {
    const modal = useModal()

    const handleOnCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
      modal.resolve(false)
      modal.hide()
      onCancel?.(e)
    }

    const handleOnOk = (e: React.MouseEvent<HTMLButtonElement>) => {
      modal.resolve(true)
      modal.hide()
      onOk?.(e)
    }

    return (
      <ModalAntd
        className='Modal'
        {...antdModalV5(modal)}
        {...props}
        onCancel={handleOnCancel}
        onOk={handleOnOk}
        closeIcon={null}
      >
        {children}
      </ModalAntd>
    )
  }
)

export const FormModal = Modal.create(
  <T extends object>({
    children,
    initialValues,
    formProps = {},
    onCancel,
    onSubmit,
    onAfterSubmit,
    ...props
  }: FormModalProps<T>) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const modal = useModal()

    const [form] = Form.useForm()

    const handleOnCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
      modal.resolve(false)
      modal.hide()
      onCancel?.(e)
    }

    const handleOnOk = async () => {
      try {
        setIsLoading(true)
        const values = await form.validateFields()
        await onSubmit?.(values)
        modal.resolve(true)
        modal.hide()
        onAfterSubmit?.()
      } catch (error) {
        console.log(error)
      } finally {
        console.log('HIDDEN')
        setIsLoading(false)
      }
    }

    return (
      <ModalAntd
        title='Hello Antd'
        {...antdModalV5(modal)}
        {...props}
        maskClosable={false}
        onCancel={handleOnCancel}
        onOk={handleOnOk}
        confirmLoading={isLoading}
        getContainer={document.getElementById('root')!}
      >
        <Form
          form={form}
          layout='vertical'
          initialValues={initialValues}
          {...formProps}
          autoFocus
        >
          {children}
        </Form>
      </ModalAntd>
    )
  }
)

// export const ConfirmModal = () => ModalAntd.warning({content: "222"})

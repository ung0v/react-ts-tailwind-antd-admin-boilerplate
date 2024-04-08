import type { ButtonProps, FormInstance } from 'antd'
import { Button, Form } from 'antd'
import React from 'react'

type SubmitButtonProps = ButtonProps & {
  form: FormInstance
}

export const SubmitButton: React.FC<
  React.PropsWithChildren<SubmitButtonProps>
> = ({ form, children, ...rest }) => {
  const [submittable, setSubmittable] = React.useState<boolean>(false)

  // Watch all values
  const values = Form.useWatch([], form)

  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false))
  }, [form, values])

  return (
    <Button type='primary' htmlType='submit' disabled={!submittable} {...rest}>
      {children}
    </Button>
  )
}

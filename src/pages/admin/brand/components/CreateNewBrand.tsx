import { Form, Input } from 'antd'

type CreateNewBrandProps = {
  // TODO
}

export const CreateNewBrand = () => {
  return (
    // <Form
    //   layout='vertical'
    //   initialValues={{
    //     name: data?.name || '',
    //     description: data?.description || ''
    //   }}
    //   onFinish={handleSubmit}
    // >
    <>
      <Form.Item
        name='name'
        label='Name'
        rules={[
          {
            required: true,
            message: 'Please input the brand name.'
          }
        ]}
      >
        <Input placeholder='Name' />
      </Form.Item>
      <Form.Item
        name='description'
        label='Description'
        rules={[
          {
            required: true,
            message: 'Please input the brand description.'
          }
        ]}
      >
        <Input placeholder='Description' />
      </Form.Item>
    </>
    // </Form>
  )
}

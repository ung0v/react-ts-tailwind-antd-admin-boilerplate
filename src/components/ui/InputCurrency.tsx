import { InputNumber, InputNumberProps } from 'antd'

export const InputCurrency = (props: InputNumberProps) => {
  return (
    <InputNumber
      formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
      {...props}
    />
  )
}

import { Button, Form, Input, Select, Typography } from 'antd'
import React, { useState } from 'react'
import { useSearchStore } from '~/stores'

type SearchProps = {
  searchData: ISearchData[]
}

export type ISearchType = 'select' | 'text' | 'radio' | 'date'

export interface ISearchData {
  label: string
  options: ISearchItem[]
}

export interface ISearchItem {
  type: ISearchType
  name: string
  data?: Array<{ label: string; value: string | number }>
  placeholder?: string
}

export const SearchTable = ({ searchData }: SearchProps) => {
  const { setSearchStates } = useSearchStore()
  const [form] = Form.useForm()
  const formValues = Form.useWatch([], { form, preserve: true })

  const renderInput = (input: ISearchItem) => {
    switch (input.type) {
      case 'select':
        return <Select className='min-w-[160px]' options={input.data} />

      case 'text':
        return <Input />
      default:
        break
    }
  }

  return (
    <Form form={form} name='search'>
      <div className='grid grid-cols-2'>
        <div className='flex flex-col gap-y-4'>
          {searchData.map((item) => (
            <div key={item.label} className='flex items-center gap-x-4'>
              <Typography.Title level={5} className='min-w-[80px]'>
                {item.label}
              </Typography.Title>
              {item.options.map((option) => (
                <Form.Item key={option.name} name={option.name} noStyle>
                  {renderInput(option)}
                </Form.Item>
              ))}
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center'>
          <Button type='primary'>Search</Button>
        </div>
      </div>
    </Form>
  )
}

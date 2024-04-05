import React, { useState } from 'react'
import { Pagination as PaginationAntd, PaginationProps } from 'antd'

export const Pagination = (props: PaginationProps) => {
  return (
    <PaginationAntd
      // showSizeChanger
      showQuickJumper
      showTotal={(total) => `Total ${total} items`}
      {...props}
    />
  )
}

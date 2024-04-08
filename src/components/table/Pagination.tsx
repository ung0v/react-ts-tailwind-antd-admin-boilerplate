import React, { useState } from 'react'
import { Pagination as PaginationAntd, PaginationProps } from 'antd'

export const Pagination = (props: PaginationProps) => {
  return <PaginationAntd {...props} />
}

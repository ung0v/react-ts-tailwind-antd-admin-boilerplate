export type BrandSchemaType = {
  id?: string
  name: string
  description: string
}
export type CategorySchemaType = {
  id?: string
  name: string
  description: string
}

export type Attribute = {
  name: string
  value: string
}

export type ProductSchemaType = {
  id?: string
  quantity?: number
  attributes: Attribute[]
  brand_id: number
  brand_name?: string
  category_id: number
  category_name?: string
  currency_code: string
  description: string
  images: string[]
  is_published: boolean
  name: string
  price: number
  short_description: string
  sku: string
}

export type CheckoutSchemaType = {
  address: string
  bank_account: string
  bank_name: string
  items: Item[]
  name: string
  phone_number: string
}

export type Item = {
  amount: number
  brand_id: number
  category_id: number
  images: string[]
  price: number
  product_id: string
  product_name: string
  sku: string
}

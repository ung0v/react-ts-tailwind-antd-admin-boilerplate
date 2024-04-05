import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'
import { ALL_PAGE_ROUTES } from '~/constants'

export const NotFoundPage = () => (
  <Result
    status='404'
    title='404'
    subTitle='Sorry, the page you visited does not exist.'
    extra={
      <Link to={ALL_PAGE_ROUTES.HOME}>
        <Button type='primary'>Back Home</Button>
      </Link>
    }
  />
)

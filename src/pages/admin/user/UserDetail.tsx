import { useParams } from 'react-router-dom'
import { useGetUserDetails } from './user.service'

export const UserDetail = () => {
  const { userId } = useParams()
  const { data } = useGetUserDetails(userId as string)
  console.log(data)
  return <div>User Detail</div>
}

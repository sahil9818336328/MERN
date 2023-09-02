import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  return <div>Error</div>
}
export default Error

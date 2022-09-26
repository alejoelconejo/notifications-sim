import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div className='mx-auto grid gap-6 place-content-center text-center w-fit p-8 border-2 rounded-lg bg-white'>
      <h1 className='text-2xl font-extrabold'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className='text-gray-400'>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage

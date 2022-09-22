import { useEffect, useState } from 'react'
import Header from './components/Header'
import Notifications from './components/Notifications'
import fetchApi from './services/fetchApi'
import Spinner from './components/Spinner'

const App = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchApi()
      .then((data) => setUsers(data.users))
      .then(() => setIsLoading(false))
  }, [])

  console.log(users)

  return (
    <div className='flex flex-col justify-start items-center h-[90vh] max-w-sm md:max-w-3xl mx-auto p-4 border-2 rounded-lg bg-white'>
      <Header />
      {isLoading ? <Spinner /> : <Notifications users={users} />}
    </div>
  )
}

export default App

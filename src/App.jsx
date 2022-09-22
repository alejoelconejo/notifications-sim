import { useEffect, useState } from 'react'
import Header from './components/Header'
import Notifications from './components/Notifications'
import fetchApi from './services/fetchApi'

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchApi().then((data) => setUsers(data.users))
  }, [])

  console.log(users)

  return (
    <main className='flex flex-col justify-center items-center h-screen max-w-sm md:max-w-3xl mx-auto p-4 border-2 rounded-lg'>
      <Header />
      <Notifications users={users} />
    </main>
  )
}

export default App

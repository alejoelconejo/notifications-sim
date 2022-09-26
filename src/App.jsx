import { useEffect, useState } from 'react'
import Header from './components/Header'
import Notifications from './components/Notifications'
import fetchApi from './services/fetchApi'
import Spinner from './components/Spinner'
import actions from './data/actions.json'
import { nanoid } from 'nanoid'

const action = () => actions[Math.floor(Math.random() * actions.length)]

const App = () => {
  const [users, setUsers] = useState([])
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem('notes')) || []
  )
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    fetchApi()
      .then((data) => setUsers(data.users))
      .then(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    !notes.length &&
      setNotes(
        users.map(({ firstName, lastName, image }) => ({
          id: nanoid(),
          firstName,
          lastName,
          image,
          isRead: false,
          action: action(),
        }))
      )
  }, [users])

  return (
    <div className='flex flex-col justify-start items-center h-[90vh] max-w-sm md:max-w-3xl mx-auto px-4 py-8 border-2 rounded-lg bg-white'>
      <Header />
      {isLoading ? (
        <Spinner />
      ) : (
        <Notifications
          notes={notes}
          setNotes={setNotes}
          users={users}
          action={action}
        />
      )}
    </div>
  )
}

export default App

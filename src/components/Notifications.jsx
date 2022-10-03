import { useEffect, useState } from 'react'
import Notification from './Notification'
import { ReactComponent as Reload } from '../assets/images/reload.svg'
import { nanoid } from 'nanoid'

const Notifications = ({ notes, setNotes, users, action }) => {
  const [counterNotes, setCounterNotes] = useState(0)

  const handleClickReadAll = () => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => ({
        ...note,
        isRead: true,
      }))
    )
  }

  const handleClickRead = (id, isRead) => {
    !isRead &&
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === id ? { ...note, isRead: true } : note
        )
      )
  }

  const handleClickDelete = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id))
  }

  const handleClickAdd = () => {
    const randomUser = users[Math.floor(Math.random() * users.length)]
    const newNote = {
      id: nanoid(),
      userId: randomUser.id,
      firstName: randomUser.firstName,
      lastName: randomUser.lastName,
      username: randomUser.username,
      image: randomUser.image,
      action: action(),
      isRead: false,
    }
    setNotes((prevNotes) => [newNote, ...prevNotes])
  }

  useEffect(() => {
    setCounterNotes(() =>
      notes.reduce((acc, { isRead }) => (!isRead ? acc + 1 : acc), 0)
    )
  }, [notes])

  return (
    <main className='overflow-hidden w-full'>
      <header className='flex justify-between w-full mb-6'>
        <h2 className='font-extrabold text-xl flex items-center justify-self-start'>
          Notifications
          <span className='text-white text-lg rounded-md bg-blue-900 px-3 mx-2'>
            {counterNotes}
          </span>
        </h2>
        <button onClick={handleClickAdd}>
          <Reload />
        </button>
        <a
          onClick={handleClickReadAll}
          className='text-gray-500 text-sm justify-self-end flex items-center cursor-pointer'
        >
          Mark all as read
        </a>
      </header>
      <section className='flex flex-col w-full h-full gap-3 overflow-y-scroll'>
        {notes.map(
          ({
            id,
            userId,
            firstName,
            lastName,
            username,
            image,
            isRead,
            action,
          }) => {
            return (
              <Notification
                key={id}
                id={id}
                userId={userId}
                firstName={firstName}
                lastName={lastName}
                username={username}
                avatar={image}
                action={action}
                isRead={isRead}
                handleClickRead={handleClickRead}
                handleClickDelete={handleClickDelete}
              />
            )
          }
        )}
      </section>
    </main>
  )
}

export default Notifications

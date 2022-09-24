import { useEffect, useState } from 'react'
import Notification from './Notification'

const Notifications = ({ notes, setNotes }) => {
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
        <a
          onClick={handleClickReadAll}
          className='text-gray-500 text-sm justify-self-end flex items-center cursor-pointer'
        >
          Mark all as read
        </a>
      </header>
      <section className='flex flex-col w-full h-full gap-3 mb-6 overflow-y-scroll'>
        {notes.map(({ id, firstName, lastName, image, isRead, action }) => {
          return (
            <Notification
              key={id}
              id={id}
              firstName={firstName}
              lastName={lastName}
              avatar={image}
              action={action}
              isRead={isRead}
              handleClickRead={handleClickRead}
              handleClickDelete={handleClickDelete}
            />
          )
        })}
      </section>
    </main>
  )
}

export default Notifications

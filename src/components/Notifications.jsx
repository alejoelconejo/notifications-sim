import Notification from './Notification'

const Notifications = ({ users }) => {
  return (
    <main className='flex flex-col w-full gap-3 my-6 overflow-y-scroll'>
      {users.map(({ id, firstName, lastName, image }) => {
        return (
          <Notification
            key={id}
            firstName={firstName}
            lastName={lastName}
            avatar={image}
          />
        )
      })}
    </main>
  )
}

export default Notifications

import Notification from './Notification'

const Notifications = ({ users }) => {
  return (
    <main className='flex flex-col w-full gap-3 my-6 overflow-y-scroll'>
      {users.map((user) => {
        return (
          <Notification
            key={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            avatar={user.image}
          />
        )
      })}
    </main>
  )
}

export default Notifications

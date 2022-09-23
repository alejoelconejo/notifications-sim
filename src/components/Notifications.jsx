import Notification from './Notification'
import actions from '../data/actions'

const Notifications = ({ users }) => {
  return (
    <main className='flex flex-col w-full gap-3 mb-6 overflow-y-scroll'>
      {users.map(({ id, firstName, lastName, image }) => {
        const action = actions[Math.floor(Math.random() * actions.length)]
        return (
          <Notification
            key={id}
            firstName={firstName}
            lastName={lastName}
            avatar={image}
            action={action}
          />
        )
      })}
    </main>
  )
}

export default Notifications

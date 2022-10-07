import { Link } from 'wouter'
import { ReactComponent as Delete } from '../assets/images/delete.svg'

const Notification = ({
  id,
  userId,
  firstName,
  lastName,
  username,
  avatar,
  action,
  time,
  isRead,
  handleClickRead,
  handleClickDelete,
}) => {
  return (
    <article
      className={`group w-full ${
        isRead ? 'bg-white' : 'bg-blue-50'
      }  border-2 border-gray-100 snap-end rounded-lg flex justify-between p-4`}
      onClick={() => handleClickRead(id, isRead)}
    >
      <div className='flex gap-4 w-11/12'>
        <img
          className='h-12 bg-white rounded-full border-2'
          src={avatar}
          loading='lazy'
        ></img>
        <div className='text-sm leading-6'>
          <p className='text-gray-500 align-middle'>
            <Link
              href={`/profile/${userId}`}
              className='text-slate-800 font-extrabold pr-1'
            >
              {firstName} {lastName}
            </Link>
            <span>{action}</span>
            {!isRead && (
              <span className='w-2 h-2 bg-red-600 rounded-full ml-2 inline-block' />
            )}
          </p>
          <p className='text-gray-400'>
            @{username} · {time}m ago
          </p>
        </div>
      </div>
      <button
        className='hidden group-hover:block'
        onClick={() => handleClickDelete(id)}
      >
        <Delete className='w-4 h-4 text-red-600' />
      </button>
    </article>
  )
}

export default Notification

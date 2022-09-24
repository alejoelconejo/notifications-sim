const Notification = ({
  id,
  firstName,
  avatar,
  lastName,
  action,
  isRead,
  handleClickRead,
  handleClickDelete,
}) => {
  return (
    <article
      className={`group w-full ${
        isRead ? 'bg-white' : 'bg-blue-50'
      }  rounded-lg flex justify-between p-4`}
      onClick={() => handleClickRead(id, isRead)}
    >
      <div className='flex gap-4'>
        <img
          className='h-12 bg-white rounded-full border-2'
          src={avatar}
          loading='lazy'
        ></img>
        <div className='text-sm'>
          <p className=' text-gray-500'>
            <span className='text-slate-800 font-extrabold pr-1'>
              {firstName} {lastName}
            </span>
            {action}
          </p>
          <p className='text-gray-400'>5m ago</p>
        </div>
      </div>

      <button
        className='hidden group-hover:block p text-red-600'
        onClick={() => handleClickDelete(id)}
      >
        X
      </button>
    </article>
  )
}

export default Notification

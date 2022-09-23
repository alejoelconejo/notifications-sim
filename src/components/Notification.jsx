const Notification = ({ firstName, avatar, lastName, action }) => {
  return (
    <article className='w-full bg-blue-50 rounded-lg p-4 flex gap-4'>
      <img
        className='h-12 bg-white rounded-full'
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
    </article>
  )
}

export default Notification

import avatar from '../assets/images/avatar-anna-kim.webp'

const Notification = () => {
  return (
    <article className='w-full bg-blue-50 rounded-lg p-4 flex gap-4'>
      <img className='h-10' src={avatar}></img>
      <div className='text-sm'>
        <p className=' text-gray-500'>
          <bold className='text-slate-800 font-extrabold pr-2'>
            Angela Gray
          </bold>
          followed you
        </p>
        <p className='text-gray-400'>5m ago</p>
      </div>
    </article>
  )
}

export default Notification

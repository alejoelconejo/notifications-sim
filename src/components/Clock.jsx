import { useState, useEffect } from 'react'

const Clock = () => {
  const [clock, setClock] = useState('00:00:00')

  const date = new Date()
  let hh = date.getHours()
  let mm = date.getMinutes()
  let ss = date.getSeconds()

  hh = hh < 10 ? '0' + hh : hh
  mm = mm < 10 ? '0' + mm : mm
  ss = ss < 10 ? '0' + ss : ss

  const time = hh + ':' + mm + ':' + ss + ' '

  useEffect(() => {
    setTimeout(() => {
      setClock(time)
    }, 1000)
  }, [clock])

  return <p className='text-gray-600 flex-1 text-center'>{clock}</p>
}

export default Clock

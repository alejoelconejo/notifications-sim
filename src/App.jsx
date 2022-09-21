import Header from './components/Header'
import Notifications from './components/Notifications'

const App = () => {
  return (
    <main className='flex flex-col justify-center items-center h-screen max-w-sm md:max-w-4xl mx-auto p-4 border-2 rounded-lg'>
      <Header />
      <Notifications />
    </main>
  )
}

export default App

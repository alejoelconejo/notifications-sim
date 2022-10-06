import { Link } from 'wouter'

const Profile = ({ users, params }) => {
  const paramsId = Number(params.id)

  const selectedProfile = users.filter((user) => user.id === paramsId)[0]

  function getAge(birthDate) {
    const yearNow = new Date().getFullYear()
    const yearBirth = new Date(birthDate).getFullYear()
    return yearNow - yearBirth
  }

  return (
    <section className='flex flex-col items-center gap-6'>
      <article className='flex items-center gap-8 border-4 p-4 rounded-lg mt-8 border-blue-100'>
        <img
          className='h-28 border-2 rounded-full '
          src={selectedProfile.image}
        ></img>
        <div>
          <p className='font-extrabold text-xl'>
            {selectedProfile.firstName} {selectedProfile.lastName}
          </p>
          <p className='text-gray-400 mb-2'>@{selectedProfile.username}</p>
          <p>Age: {getAge(selectedProfile.birthDate)}</p>
          <p>Gender: {selectedProfile.gender}</p>
          <p>E-mail: {selectedProfile.email}</p>
        </div>
      </article>
      <Link className='text-gray-600' href='/'>
        Volver a notificaciones
      </Link>
    </section>
  )
}

export default Profile

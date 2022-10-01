import { Link } from 'wouter'

const Profile = ({ users, params }) => {
  const paramsId = Number(params.id)

  const selectedProfile = users.filter((user) => user.id === paramsId)[0]

  console.log(selectedProfile)
  return (
    <section>
      <article>
        <img className='h-28' src={selectedProfile.image}></img>
        <h2>{selectedProfile.username}</h2>
      </article>
      <Link href='/'>Volver a notificaciones</Link>
    </section>
  )
}

export default Profile

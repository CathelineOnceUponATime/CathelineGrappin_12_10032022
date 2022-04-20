/**
 * un message d'erreur
 * affiché en cas de problème
 * de connexion à la base de données
 * @component
 */
function Error () {
  return (
    <article className='error'>
      <h1> 404 </h1>
      <h2> Oups! La page que vous demandez n'existe pas </h2>
    </article>
  )
}

export default Error

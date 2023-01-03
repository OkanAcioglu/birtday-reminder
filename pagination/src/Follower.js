import React from 'react'

const Follower = ({ avatar_url, html_url, login }) => {
  //! We have our list here whether it is 30 or 100 or 5000...
  return (
    <article className='card'>
      <img src={avatar_url} alt={login} />
      <h4>{login}</h4>
      <a href={html_url} className='btn'>
        view profile
      </a>
    </article>
  )
}

export default Follower

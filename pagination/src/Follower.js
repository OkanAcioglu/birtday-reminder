import React from 'react'

const Follower = ({ avatar_url, html_url, login }) => {
  //! We have our list here whether it is 30 or 100 or 5000...
  //! Pagination idea --> after lisnting the whole items (100 items) we have an array of 100 items. But for pagination we wanna array of arrays with each array got 10 items in it...
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

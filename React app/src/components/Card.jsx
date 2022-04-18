import React from 'react'

export const Card = ({id, avatar, email, first_name, last_name}) => {
  return (
<div className="card" style={{display: 'flex', width: 'fit-content'}}>
  <div className="card-image">
    <figure className="image">
      <img src={avatar} alt="Profile" style={{height: '200px', width:'auto'}} />
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4">{`${first_name} ${last_name}`}</p>
        <p className="subtitle is-6">{email}</p>
      </div>
    </div>
  </div>
</div>
  )
}

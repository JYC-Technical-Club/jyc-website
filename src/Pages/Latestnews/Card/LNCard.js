import React from 'react'

export default function LNCard(parse) {
  return (
    <div className='ln-card'>
      <img src={parse.img}/>
      <div>
        <h6>{parse.title}</h6>
        <p>{parse.date}</p>
        <p>{parse.content}</p>
        <a href={parse.link}>Read Full Article</a>
      </div>
    </div>
  )
}

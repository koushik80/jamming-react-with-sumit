import React from 'react';

const Anecdote = ({text, votesCount}) => {
  return (
    <div>
      <p>{text}</p>
      <p>has {votesCount} votes</p>
    </div>
  )
}

export default Anecdote;
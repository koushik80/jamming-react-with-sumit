import { useState } from 'react';
import Anecdote from './components/Anecdote';

const Header = ({name}) => <h2>{name}</h2>

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];

  const [selected, setSelected] = useState(0);
  const [allVotes, setAllVotes] = useState(Array(6).fill(0));


  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  );

  const handleRandomClicks = () => {
    const arrayIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(arrayIndex)
  };

  const handleVoteClicks = () => {
    const newAllVotes = [...allVotes];
    newAllVotes[selected] += 1
    setAllVotes(newAllVotes)
  };

  return (
    <div>
      <Header name="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} votesCount={allVotes[selected]} />
      <Button handleClick={handleRandomClicks} text="Next anecdote" />
      <Button handleClick={handleVoteClicks} text="vote" />

      <Header name="Anecdote with most votes" />
    </div>
  )
}

export default App;
import { useState } from 'react';


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  );

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'))
    setLeft(left + 1)
  };

  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'))
    setRight(right + 1)
  };

  return (
    <div>
      <h1>give feedback</h1>
    </div>
  )
}

export default App;
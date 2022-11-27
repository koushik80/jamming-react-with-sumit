import { useState } from "react";
import History from "./components/History";


const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);

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
      {left}
      <Button handleClick={handleLeftClick} text = 'Left' />
      <Button handleClick={handleRightClick} text = 'Right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App;
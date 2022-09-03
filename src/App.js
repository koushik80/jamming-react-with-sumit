import { useState } from 'react';
import Button from './components/Button';
import ShowCount from './components/ShowCount';
import Title from './components/Title';

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = () => {
    setCount1((prevCount) => prevCount + 1);

  };

  const incrementByFive = () => {
    setCount2((prevCount) => prevCount + 5);
  }




  return (
    <div className="app">
      <Title />
      <ShowCount />
      <span></span>
      <Button></Button>
      <hr />
      <ShowCount />
      <Button></Button>
    </div>
  )
}

export default App;
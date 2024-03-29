import { useCallback, useMemo, useState } from 'react';
import Button from './components/Button';
import ShowCount from './components/ShowCount';
import Title from './components/Title';

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);

  }, []);

  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const isEvenOrOdd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i += 1;
    return count1 % 2 === 0;

  }, [count1]);




  return (
    <div className="app">
      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <span>{isEvenOrOdd ? 'Even' : 'Odd' }</span>
      <Button type="button" handleClick={incrementByOne}>Increment by One</Button>
      <hr />
      <ShowCount count={count2} title="Counter 2" />
      <Button type="button" handleClick={incrementByFive}>Increment by Five</Button>
    </div>
  );
}

export default App;
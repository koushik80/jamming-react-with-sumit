import React from 'react';

const MyComponent = () => {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const addClick = () => {
        setCount((prevState) => prevState + 1);
    };


  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <p>
        <button type="button" onClick={addClick}>Click</button>
      </p>
    </div>
  )
}

export default MyComponent;

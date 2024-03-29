import { useEffect, useState } from 'react';

const MyComponent = () => {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    //const [text, setText] = useState('');

    const tick = () => {
        setCount(new Date());
    };

    useEffect(() => {
        console.log('updating document title')
        document.title = `Clicked ${count} times`;
    }, [count]);

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    const addClick = () => {
        setCount((prevState) => prevState + 1);
    };


  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
          {/*<p>
              <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
  </p>*/}
      <p>
        <button type="button" onClick={addClick}>Click</button>
      </p>
    </div>
  )
}

export default MyComponent;

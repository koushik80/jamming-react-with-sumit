import { useEffect, useRef } from 'react';

const Form = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    
  }, []);

  return (
    <div>
      <p>
        <input type="text" placeholder="enter something..." />
      </p>
    </div>
  );
}

export default Form;
// Fetch: By using useReducer

import React, { useEffect, useReducer } from 'react';

const initialState = {
  loading: true,
  error: '',
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'Success':
      return {
        loading: false,
        post: action.result,
        error: '',
      };
    case 'Failure':
      return {
        loading: false,
        post: {},
        error: 'There was an error fetching the post',
      };
    default:
      return state;
  }
};

const GetPost2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then((data) => {
        dispatch({ type: 'Success', result: data });
      })
      .catch(() => {
        dispatch({ type: 'Failure'});
      });
  }, []);


  return (
    <div>
      {state.loading ? 'Loading....' : state.post.title}
      {state.error || null}
    </div>
  );
}

export default GetPost2;
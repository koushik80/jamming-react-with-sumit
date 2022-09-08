// Fetch: By using useReducer

import React, { useEffect, useReducer } from 'react';

const initialState = {
  loading: true,
  error: '',
  post: {}
};

const reducer((state, action) => {
  switch (action.type) {
    case 'Success':
      return {
        loading: false,
        post: action.result,
        error: ''
      };
    case 'Failure':
      return {
        loading: false,
        post: {},
        error: 'There was an error fetching the post'
      };
    default:
      return state;
  }
});

const GetPost2 = () => {
  const [state, dispatch] = useReducer(state, initialState);

  useEffect(() => {

  }, []);


  return (
    <div>GetPost2</div>
  )
}

export default GetPost2;
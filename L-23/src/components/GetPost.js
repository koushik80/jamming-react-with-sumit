import { useEffect, useState } from 'react';

const GetPost = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState({}); // as form JSON it comes Object so we put by default blank object

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then((data) => {
        setLoading(false);
        setPost(data);
        setError('');

      })
      .catch(() => {
        setLoading(false);
        setPost({});
        setError('There was an error fetching the post');

      })

  }, []);
  return (
    <div>
      {loading ? 'Loading....' : post.title}
      {error || null}
    </div>
  )
}

export default GetPost;

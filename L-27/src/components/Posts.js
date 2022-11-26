import { useParams } from 'react-router-dom';

function Posts() {
  const { category, topic } = useParams();
  return (
    <div>
      This is Post Page- {category}/{topic}
    </div>
  )
}

export default Posts;

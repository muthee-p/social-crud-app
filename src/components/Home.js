import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/Posts';
import Nav from './Nav'



const Home = () => {
    const {status, data} = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const [likes, setLikes] = useState({});
    const [comments, setComments] = useState ([]);
    const [ inputText, setInput] = useState("")
   //posts
    useEffect(() => {
        if (status === 'idle') {
          dispatch(fetchPosts());
        }
      }, [status, dispatch]);
      if (status === 'loading') {
        return <div>Loading...</div>;
      } else if (status === 'failed') {
        return <div>Failed to load posts.</div>;
      }

      //likes
    const handleLike = postId =>{
        const newLikes = {...likes};
        newLikes[postId] = (newLikes[postId] || 0) + 1;
        setLikes(newLikes);
      };

      //comments
      const handleAddComments = (event) => {
        event.preventDefault();
        setComments([{text:inputText, id: Math.random() *1000, ...comments}]);
        setInput('')
      };

  return (
        <div className='posts'>
          <Nav />
            {data.map((post) => {
                return(
                    <div>
                    <h1 key={post.id}>{post.title}</h1>
                    <p>{post.body}</p>
                    <button onClick={() => handleLike(post.id)}>like</button>
                        <span>{likes[post.id] || 0}</span>
<h3>comments</h3>
                        {/* comments section */}
                        
                      <div className='comments'>
                        <input value={inputText} onChange={event =>{setInput(event.target.value)}} type='text' />
                        <button onClick={handleAddComments}>comment</button>
                        {comments.map((comment) => (
                          <div>
                            <p key={comment.id}>{comment.text}</p>
                            </div>
                        ))
                        }
                          
                    </div>
                    
                    </div>
  )
}
            )}
            </div>)}
export default Home;
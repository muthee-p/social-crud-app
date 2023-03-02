
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, addPost, deletePost , updatePost } from '../features/posts/Posts';


const CreatePosts = () => {
    const {status, data} = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const [ title, setTitle ] = useState("");
    const [ body, setPostBody ] = useState("");
    const [ newBody, setNewBody ] = useState("");
    const [ newTitle, setNewTitle ] = useState("");

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
      const handleAddPost = () => {
        dispatch(addPost({
          title: title,
          body: body,
        }));
        setTitle(''); setPostBody('');
      };

  return (
    <div>
        {" "}
        <div className='addpost'>
           <input onChange={(event) => {setTitle(event.target.value)}} type='text' placeholder='Post Title' /> 
            <textarea onChange={(event) => {setPostBody(event.target.value)}} type='text' placeholder='write Post' />
           <button onClick={handleAddPost}>post</button>
        </div>
        <div className='posts'>
            {data.map((post) => {
                return(
                    <div>
                    <h1 key={post.id}>{post.title}</h1>
                    <p>{post.body}</p>
                        <input type='text' placeholder="edit text" 
                        onChange={(event) => {
                            setNewBody(event.target.value);
                        }}/>

                    <button onClick={() => {
                        dispatch(updatePost({id: post.id, body: newBody}))
                    }}>submit</button>
                    <button
                    onClick={() => dispatch(deletePost({id:post.id }))}>Delete post</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default CreatePosts
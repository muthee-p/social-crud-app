
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, addPost, deletePost , updatePost } from '../features/posts/Posts';


const Profile = () => {
    const {status, data} = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const [ title, setTitle ] = useState("");
    const [ body, setPostBody ] = useState("");
    const [ newBody, setNewBody ] = useState("");
    const [showModal, setShowModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(null);

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
      const handleDeletePost = (id) => {
        setPostIdToDelete(id);
        setShowModal(true);
      };
    
      const handleConfirmDelete = () => {
        dispatch(deletePost({ id: postIdToDelete }));
        setShowModal(false);
      };
    
      const handleCancelDelete = () => {
        setShowModal(false);
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
                    <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                    {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Are you sure you want to delete this post?</h2>
            <button onClick={handleConfirmDelete}>Yes</button>
            <button onClick={handleCancelDelete}>No</button>
          </div>
        </div>
      )}
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Profile;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/Posts";
import Nav from "./Nav";

const Home = () => {
  const { status, data } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState([]);
  const [inputText, setInput] = useState("");

  //posts
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  } else if (status === "failed") {
    return <div>Failed to load posts.</div>;
  }

  //likes
  const handleLike = (postId) => {
    const newLikes = { ...likes };
    newLikes[postId] = (newLikes[postId] || 0) + 1;
    setLikes(newLikes);
  };

  //comments
  const handleAddComments = () => {
    setComments([{ text: inputText, id: Math.random() * 1000, ...comments }]);
    setInput("");
  };

  return (
    <div className="w-[80%] divide-y-2 dark:divide-slate-700 gap-2 flex flex-col mt-3">
      {data?.map((post, index) => {
        return (
          <div Key={post.id || index} className="">
            <h1 key={post.id} className="text-lg font-bold">
              {post.title.charAt(0).toUpperCase() + post.title.slice(0, 30)}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
              {post.body.length > 100
                ? post.body.slice(0, 100) + "..."
                : post.body}
            </p>
            <button
              onClick={() => handleLike(post.id)}
              variant="contained"
              className="bg-[#0c1c2c]"
            >
              like
            </button>
            <span>{likes[post.id] || 0}</span>
            <h6>comments</h6>
            {/* comments section */}

            <div className="comments">
              <input
                value={inputText}
                onChange={(event) => {
                  setInput(event.target.value);
                }}
                type="text"
              />
              <button
                onClick={handleAddComments}
                variant="contained"
                className="bg-[#0c1c2c]"
              >
                comment
              </button>
              {comments.map((comment) => (
                <div>
                  <p key={comment.id}>{comment.text}</p>
                </div>
              ))}
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
};
export default Home;

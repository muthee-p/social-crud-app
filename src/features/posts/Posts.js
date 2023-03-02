import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchPosts = createAsyncThunk('posts/fetchposts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
});

export const postSlice = createSlice({
    name:"posts",
    initialState: {
        status:'idle',
        data:[]
    },
    reducers: {
        addPost: (state, action) =>{
            const newPost = {
                id: Date.now(),
                title: action.payload.title,
                body: action.payload.body,
              };
              // push the new post to the data array in the state
              state.data.push(newPost);
        },
        deletePost: (state, action) => {
            state.data = state.data.filter((post) => post.id !== action.payload.id);
        },
        updatePost: (state, action) => {
            state.data.map((post) =>{
                if (post.id === action.payload.id){
                    post.body = action.payload.body;
                }
            });
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchPosts.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
          })
          .addCase(fetchPosts.rejected, (state) => {
            state.status = 'failed';
          });
      },

});

export const {addPost, deletePost, updatePost} = postSlice.actions
export default postSlice.reducer
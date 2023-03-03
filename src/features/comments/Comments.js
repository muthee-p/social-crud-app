import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchComments = createAsyncThunk('comments/fetchComments', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await response.json();
  return data;
});

export const commentSlice = createSlice({
    name:"comments",
    initialState: {
        status:'idle',
        data:[],
        currentIndex: 0
    },
    reducers: {
        addComment: (state, action) =>{
            const newComment = {
                id: Date.now(),
                username: action.payload.email.substring(0, 6),
                body: action.payload.body,
              };
              // push the new post to the data array in the state
              state.data.push(newComment);
        },
        deleteComment: (state, action) => {
            state.data = state.data.filter((comment) => comment.id !== action.payload.id);
        },
        updateComment: (state, action) => {
            state.data.map((comment) =>{
                if (comment.id === action.payload.id){
                    return{
                    ...comment,
                    body: action.payload.body,
                    };
                }return comment;
            });
        },
        setCurrentIndex: (state, action) => {
            state.currentIndex = action.payload;
        },
    },


});

export const {addComment, deleteComment, updateComment, setCurrentIndex} = commentSlice.actions
export default commentSlice.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch data
export const fetchUsers = createAsyncThunk('counter/fetchUsers', async (payload) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  }
  catch (err) {
    return err.message
  }
});


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      inputValue: 0,
      loading: false,
      items: [],
      error: null
    },
    reducers: {
      textFieldOnchange: (state, action) => {
        state.inputValue = action.payload
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchUsers.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
          state.loading = false;
          state.items = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  
  })
  
  // Action creators are generated for each case reducer function
  export const { textFieldOnchange } = counterSlice.actions;
  
  export default counterSlice.reducer;
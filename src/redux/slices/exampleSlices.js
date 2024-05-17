import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  data: [], //inital value
  status: "idle", //'idele', | 'loading' | 'succed" | 'failed'
  error: null,
};

//define an async thunk for fetching data

export const fetchData = createAsyncThunk("example/data", async () => {
  const response = await fetch("/api/data");
  if (!response.ok) {
    throw new error("Network response was not ok");
  }
  const data = await response.json();
  return data;
});

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementsByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state,action) => {
        (state.status = "succeeded"), (state.data = action.payload);
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {increment, decrement, incrementsByAmount} = exampleSlice.action;
export default exampleSlice.reducer;

import { createSlice } from "@reduxjs/toolkit"

const blogSlice = createSlice({
  name: "blog",

  initialState: {
    loading: true,
    blogs: [],
    likes: [],
    categories: [],
    cardDetail: [],
    comments: [],
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true
      state.error = false
    },
    getSuccess: (state, { payload: { data, url } }) => {
      state[url] = data
    },
    fetchFail: (state) => {
      state.loading = false
      state.error = true
    },
  },
})

export const { fetcStart, getSuccess, fetchFail } = blogSlice.actions
export default blogSlice.reducer

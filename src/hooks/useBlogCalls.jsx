import { fetchFail, fetchStart } from "../features/authSlice"
import { useDispatch } from "react-redux"
import useAxios from "./useAxios"
import { getSuccess } from "../features/blogSlice"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"

const useBlogCalls = () => {
  const dispatch = useDispatch()
  const { axiosPublic, axiosWithToken } = useAxios()

  const getPostData = async (url) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosPublic.get(`api/${url}/`)
      dispatch(getSuccess({ data, url }))
    } catch (error) {
      toastErrorNotify("Relevant data cannot be accessed")
      dispatch(fetchFail())
    }
  }
  const getLikeCreate = async (url, id) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken.post(`api/${url}/${id}/`)
      dispatch(getSuccess({ data, url }))
    } catch (error) {
      toastErrorNotify("Operations failed, check your internet connection")
      dispatch(fetchFail())
    }
  }
  const getCategoriesQuery = async (url) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosPublic.get(`api/${url}/`)
      dispatch(getSuccess({ data, url }))
    } catch (error) {
      dispatch(fetchFail())
    }
  }
  const getNewBlogCreate = async (url, newBlogInfo) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.post(`api/${url}/`, newBlogInfo)
      toastSuccessNotify("Blog Posted Successfully 👌")
    } catch (error) {
      toastErrorNotify("Blog post failed please try again 🤨")
      dispatch(fetchFail())
    }
  }
  const getDetailRead = async (url, id) => {
    dispatch(fetchStart())
    try {
      const urlPath = url === "blogs" ? "blogsDetail" : url
      const { data } = await axiosWithToken.get(`api/${url}/${id}/`)
      dispatch(getSuccess({ data, url: urlPath }))
    } catch (error) {
      dispatch(fetchFail())
    }
  }
  const getCreateComment = async (url, id, comment) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken.post(`api/${url}/${id}/`, comment)
      dispatch(getSuccess({ data, url }))
      toastSuccessNotify("Your comment has been sent successfully 👌")
    } catch (error) {
      toastErrorNotify("An error occurred while submitting your comment. 🤨")
      dispatch(fetchFail())
    }
  }
  const deleteBlog = async (url, id) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.delete(`api/${url}/${id}/`)
      getPostData("blogs")
      toastSuccessNotify("Blog successfully deleted 👌")
    } catch (error) {
      toastErrorNotify("An error occurred while deleting the blog 🤨")
      dispatch(fetchFail())
    }
  }

  return {
    getPostData,
    getLikeCreate,
    getCategoriesQuery,
    getNewBlogCreate,
    getDetailRead,
    getCreateComment,
    deleteBlog,
  }
}

export default useBlogCalls

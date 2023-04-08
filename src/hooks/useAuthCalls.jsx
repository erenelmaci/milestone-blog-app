import { useNavigate } from "react-router-dom"
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import { useDispatch } from "react-redux"
import axios from "axios"

const useAuthCalls = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const BASE_URL = "https://32160.fullstack.clarusway.com/"

  const login = async (url, userInfo) => {
    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${BASE_URL}users/auth/${url}/`,
        userInfo
      )
      dispatch(loginSuccess(data))
      toastSuccessNotify("login performed")
      navigate("/")
    } catch (error) {
      toastErrorNotify("An error occurred while logging in")
      dispatch(fetchFail())
    }
  }
  const logout = async (url) => {
    dispatch(fetchStart())
    try {
      await axios.post(`${BASE_URL}users/auth/${url}/`)
      dispatch(logoutSuccess())
      navigate("/login")
    } catch (error) {
      dispatch(fetchFail())
    }
  }
  const register = async (url, userInfo) => {
    dispatch(fetchStart())
    try {
      const { data } = await axios.post(`${BASE_URL}users/${url}/`, userInfo)
      dispatch(registerSuccess(data))
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  return { login, logout, register }
}

export default useAuthCalls

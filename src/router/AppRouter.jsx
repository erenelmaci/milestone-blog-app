import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Register from "../pages/Register"
import Login from "../pages/Login"
import PrivateRouter from "./PrivateRouter"
import Profile from "../pages/Profile"
import NewBlog from "../pages/NewBlog"
import Detail from "../pages/Detail"
import About from "../pages/About"
import Dashboard from "../pages/Dashboard"
import Drafts from "../pages/Drafts"
import NotFound from "../pages/NotFound"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import "../style/Router.css"

const AppRouter = () => {
  const location = useLocation()

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={500}>
        <Routes>
          <Route index path="/" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
          <Route path="" element={<PrivateRouter />}>
            <Route path="profile" element={<Profile />} />
            <Route path="newblog" element={<NewBlog />} />
            <Route path={`/detail/:id`} element={<Detail />} />
            <Route path="about" element={<About />} />
            <Route path="drafts" element={<Drafts />} />
          </Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default AppRouter

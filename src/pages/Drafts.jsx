import { Box } from "@mui/material"
import DraftCards from "../components/blog/DraftCards"
import useBlogCalls from "../hooks/useBlogCalls"
import { useEffect } from "react"
import { useSelector } from "react-redux"

const Drafts = () => {
  const { getPostData } = useBlogCalls()
  const blogs = useSelector((state) => state.blogs.blogs)
  const currentUser = useSelector((state) => state.auth.currentUser)

  useEffect(() => {
    getPostData("blogs")
  }, []) // eslint-disable-line

  console.log(currentUser.username);

  return (
    <Box>
      {blogs?.map((item) => { // eslint-disable-line
        if (item.author === currentUser.username && item.status === "d") {
          return <DraftCards />
        }
      })}
    </Box>
  )
}

export default Drafts

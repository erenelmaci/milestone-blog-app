import { useSelector } from "react-redux"
import Cards from "../components/blog/Cards"
import useBlogCalls from "../hooks/useBlogCalls"
import { useEffect } from "react"
import { Box, Grid } from "@mui/material"
import { toastSuccessNotify } from "../helper/ToastNotify"

const Dashboard = () => {
  const { getPostData } = useBlogCalls()
  const blogData = useSelector((state) => state.blogs.blogs)

  useEffect(() => {
    getPostData("blogs")
  }, []) // eslint-disable-line

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "3rem", marginBottom:"5rem" }}>
      <Grid container spacing={3} sx={{ maxWidth: "70rem", width: "100%" }}>
        {blogData?.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item?.id}>
            <Cards
              id={item?.id}
              title={item?.title}
              author={item?.author}
              content={item?.content}
              image={item?.image}
              likeNumber={item?.likes}
              postView={item?.post_views}
              date={item?.publish_date}
              commentCount={item?.comment_count}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Dashboard

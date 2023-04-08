import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import ForumIcon from "@mui/icons-material/Forum"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { Button } from "@mui/material"
import useBlogCalls from "../../hooks/useBlogCalls"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Cards = ({
  id,
  title,
  author,
  content,
  image,
  likeNumber,
  postView,
  date,
  commentCount,
}) => {
  const { getLikeCreate, getPostData, getDetailRead } = useBlogCalls()
  const navigate = useNavigate()
  const currentUser = useSelector((state) => state.auth.currentUser)

  const blogLikes = useSelector((state) => state.blogs.blogs)
  const userId = useSelector((state) => state.auth.currentUser)
  const likedPost = []

  // eslint-disable-next-line
  blogLikes?.map((item) => {
    const userLikes = item.likes_n
    // eslint-disable-next-line
    return userLikes?.map((i) => {
      if (userId?.id === i.user_id) {
        likedPost.push(i.post_id)
      }
    })
  })

  const dateString = date
  const dateObj = new Date(dateString)
  const formattedDate = `${dateObj.getDate()}.${
    dateObj.getMonth() + 1
  }.${dateObj.getFullYear()}`
  const formattedTime = dateObj.toLocaleTimeString()
  const result = `${formattedDate} ${formattedTime}`

  const handleLikeButton = (id) => {
    getLikeCreate("likes", id)
    setTimeout(() => {
      getPostData("blogs")
    }, 100)
  }

  const handleCommentIcon = (id) => {
    getDetailRead("blogs", id)
    navigate(`/detail/${id}`)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar src={image} aria-label="recipe"></Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={author}
        subheader={result}
      />
      <CardMedia
        component="img"
        height="194"
        sx={{ objectFit: "contain" }}
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h6" color="#ffa000">
          {title}
        </Typography>
        <Typography
          sx={{ height: "4rem" }}
          variant="body2"
          color="text.secondary"
        >
          {content?.substring(0, 140) + "..."}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={() =>
            currentUser ? handleLikeButton(id) : navigate("/login")
          }
          aria-label="add to favorites"
        >
          <FavoriteIcon
            sx={{ color: likedPost.includes(id) ? "red" : "white" }}
          />
        </IconButton>
        <Typography>{likeNumber}</Typography>
        <IconButton
          sx={{ color: "orange" }}
          onClick={() =>
            currentUser ? handleCommentIcon(id) : navigate("/login")
          }
          aria-label="add to favorites"
        >
          <ForumIcon />
        </IconButton>
        <Typography>{commentCount}</Typography>
        <IconButton sx={{ color: "#07aaea" }} aria-label="add to favorites">
          <RemoveRedEyeIcon />
        </IconButton>
        <Typography>{postView}</Typography>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button onClick={() => navigate(`/detail/${id}`)}>Read More</Button>
      </CardActions>
    </Card>
  )
}
export default Cards

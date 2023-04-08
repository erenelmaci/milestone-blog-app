import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { useSelector } from "react-redux"

const ProfileDetail = () => {
  const currentUser = useSelector((state) => state.auth.currentUser)

  return (
    <Card sx={{ maxWidth: "700px", margin: "0 auto" }}>
      <CardHeader
        sx={{ color: "#bd0e0e" }}
        avatar={
          <Avatar
            sx={{ width: "7rem", height: "7rem" }}
            src={currentUser?.image}
          />
        }
        title={
          <Typography variant="h4" component="div">
            {currentUser?.first_name} {currentUser?.last_name}
          </Typography>
        }
        subheader={
          <Typography variant="h6" color="text.secondary">
            {currentUser?.username}
          </Typography>
        }
      />
      <CardContent sx={{ color: "#FFA500" }}>
        <Typography variant="h5" gutterBottom>
          Profile Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" color="text.secondary">
              Username
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography variant="body1">{currentUser?.username}</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" color="text.secondary">
              Email
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography variant="body1">{currentUser?.email}</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" color="text.secondary">
              First Name
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography variant="body1">{currentUser?.first_name}</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" color="text.secondary">
              Last Name
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography variant="body1">{currentUser?.last_name}</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" color="text.secondary">
              Biography
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography variant="body1">{currentUser?.bio}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ProfileDetail

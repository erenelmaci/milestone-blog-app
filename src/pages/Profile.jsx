import { Box, Grid, Typography } from "@mui/material"
import React from "react"
import ProfileDetail from "../components/blog/ProfileDetail"

const Profile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "3rem",
      }}
    >
      <Typography variant="h4">Profile Details</Typography>
      <Grid
        sx={{
          marginTop: "2rem",
          gap: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProfileDetail />
      </Grid>
    </Box>
  )
}

export default Profile

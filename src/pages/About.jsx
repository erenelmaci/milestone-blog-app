import * as React from "react"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import "../style/About.css"
import Icons from "../assets/icons/Icons"

const About = () => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "auto",
        marginTop: "2rem",
        textAlign: "center",
      }}
    >
      <CardMedia
        component="img"
        sx={{ objectFit: "contain" }}
        image={"https://avatars.githubusercontent.com/u/105083973?v=4"}
        alt="image"
      />
      <CardContent sx={{ display: "flex", justifyContent: "center" }}>
        <Icons />
      </CardContent>
    </Card>
  )
}

export default About

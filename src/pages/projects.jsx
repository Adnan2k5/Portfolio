import React from "react";
import AppearOnScroll from "../components/AppearonScroll";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import expense from "../assets/6425322.jpg";
import event from "../assets/3870277.jpg";

export const Projects = () => {
  return (
    <AppearOnScroll>
      <div id="project" className="skill-box  justify-around mt-12 flex flex-col w-full ">
        <div className="title text-center flex items-center justify-center">
        <h1 className="text-3xl w-fit  border-b-2 border-grey-100">Projects</h1>
        </div>
              
        <div className="cards p-6 justify-around mt-5 flex">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={expense}
                alt="Event"
              />
              <CardContent className="bg-black text-white hover:text-cyan-300 transition-all duration-200">
                <Typography gutterBottom variant="h5" component="div">
                  Expense Management
                </Typography>
                <Typography variant="body2" className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quos, esse.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={event}
                alt="Event"
              />
              <CardContent className="bg-black text-white">
                <Typography gutterBottom variant="h5" component="div">
                  Event Management
                </Typography>
                <Typography variant="body2" className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quos, esse.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </AppearOnScroll>
  );
};

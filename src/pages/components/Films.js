import { useState, useEffect } from "react";
import getAllData from "../api/getAllData";

// MUI Imports
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import {
  Experimental_CssVarsProvider as CssVarsProvider,
  useColorScheme,
} from '@mui/material/styles';

// create Image array fot the posters
let posters = [
  {
    id: 1,
    image: "/films/thePhantomMenace.jpg",
  },
  {
    id: 2,
    image: "/films/attackOfTheClones.jpg",
  },
  {
    id: 3,
    image: "/films/revengeOfTheSith.jpg",
  },
  {
    id: 4,
    image: "/films/aNewHope.jpg",
  },
  {
    id: 5,
    image: "/films/empireStrikesBack.jpg",
  },
  {
    id: 6,
    image: "/films/returnOfTheJedi.jpg",
  },
];

const Films = () => {
  const [films, setFilms] = useState([]);
  const [open, setOpen] = useState(true);
  const [image, setImage] = useState("");

  const handleClick = () => {
    setOpen(!open);
  };

  // Fetch films
  useEffect(() => {
    getAllData("https://swapi.dev/api/films/").then((data) => {
      if (data.results) {
        setFilms(data.results);
      } else {
        console.log("Error in films useEffect");
      }
    });
  }, []);

  //  if posters.id matches film show poster
  useEffect(() => {

    films.map((data) => {
      posters.map((poster) => {
        let currentFilmId =  data.episode_id;
        let currentPosterId = poster.id;   
        let posterImage = poster.image;

        if(currentFilmId === currentPosterId) {
          setImage(posterImage)
        }
           
      });    
    });
  }, [films]);

  const renderPoster = (episode_id) => {
  const poster =  posters.filter((x) => episode_id === x.id);
  return poster[0].image;

  };



  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  //   margin: "10px 0",
  //   width: "100%",
  // }));

  const StyledH5 = styled(Typography)(({theme }) => ({
    ...theme.typography.h4,
    // fontFamily: "Star Wars",
  }));

  const StyledBody = styled(Typography)(({theme }) => ({
    ...theme.typography.body1,
      // minHeight: "390px",
      border: "1px dotted black",
  }));

  const StyledScrollText = styled(Typography)(({theme }) => ({
    ...theme.typography.body2,
      border: "1px solid red",
  }));


  return (
    <>
      {films.map((film) => {
        { /* reuseable below just change for the api data ie. film, characters */ }
        const {
          title,
          created,
          director,
          episode_id,
          opening_crawl,
          planets,
          release_date,
          characters,
          producer,
          species,
          vehicles,
        } = film;

        {
          /* I want to set the image for each Films movie to the poster */
        }

        return (
          <Grid
            container
            key={episode_id}
            sx={{
              display: "flex",
              flexDirection: "row",
              mx: "10px",
              my: "20px",
              width: "465px",

              // border: "1px dotted yellow",
            }}
          >
            <Grid item>
              <Card
              sx={{ maxWidth: "420px",
               maxHeight: "865px",
                border: "2px solid blue",
                 }}
              >
                <CardMedia 
                component="img" 
                alt="movie poster" 
                height="140" 
                image={renderPoster(episode_id)}
                 />
                <CardContent>
                  <StyledH5>
                    {title}
                  </StyledH5>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
                 <StyledBody>
                 <StyledScrollText>

                  {opening_crawl}
                 </StyledScrollText>
                 </StyledBody>

                </CardContent>
              </Card>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};

export default Films;

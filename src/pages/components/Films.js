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

{
  // {title: 'Revenge of the Sith', episode_id: 3, opening_crawl: 'War! The Republic is crumbling\r\nunder attacks by t…ate mission to rescue the\r\ncaptive Chancellor....', director: 'George Lucas', producer: 'Rick McCallum', …}
  // characters : (34) ['https://swapi.dev/api/people/1/', 'https://swapi.dev/api/people/2/', 'https://swapi.dev/api/people/3/', 'https://swapi.dev/api/people/4/', 'https://swapi.dev/api/people/5/', 'https://swapi.dev/api/people/6/', 'https://swapi.dev/api/people/7/', 'https://swapi.dev/api/people/10/', 'https://swapi.dev/api/people/11/', ...']
  // created: "2014-12-20T18:49:38.403000Z"
  // director : "George Lucas"
  // edited : "2014-12-20T20:47:52.073000Z"
  // episode_id : 3
  // opening_crawl : "War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor...."
  // planets : (13) ['https://swapi.dev/api/planets/1/', 'https://swapi.dev/api/planets/2/', 'https://swapi.dev/api/planets/5/', 'https://swapi.dev/api/planets/8/', 'https://swapi.dev/api/planets/9/', 'https://swapi.dev/api/planets/12/', ...]
  // producer: "Rick McCallum"
  // release_date :"2005-05-19"
  // species: (20) ['https://swapi.dev/api/species/1/', 'https://swapi.dev/api/species/2/', 'https://swapi.dev/api/species/3/', 'https://swapi.dev/api/species/6/', 'https://swapi.dev/api/species/15/', 'https://swapi.dev/api/species/19/',...']
  // starships : (12) ['https://swapi.dev/api/starships/2/', 'https://swapi.dev/api/starships/32/', 'https://swapi.dev/api/starships/48/', 'https://swapi.dev/api/starships/59/', ...]
  // title : "Revenge of the Sith"
  // url : "https://swapi.dev/api/films/6/"
  // vehicles : (13) ['https://swapi.dev/api/vehicles/33/', 'https://swapi.dev/api/vehicles/50/', 'https://swapi.dev/api/vehicles/53/', 'https://swapi.dev/api/vehicles/56/',...]
  // [[Prototype]] : Object
}

// create Image array fot the posters
let posters = [
  {
    episode_id: 1,
    image: "/films/thePhantomMenace.jpg",
  },
  {
    episode_id: 2,
    image: "/films/attackOfTheClones.jpg",
  }, 
  {
    episode_id: 3,
    image: "/films/revengeOfTheSith.jpg",
  },
  {
    episode_id: 4,
    image: "/films/aNewHope.jpg",
  },
  {
    episode_id: 5,
    image: "/films/empireStrikesBack.jpg",
  }, 
  {
    episode_id: 6,
    image: "/films/returnOfTheJedi.jpg",
  },
];

function IsFilm() {
  let filterFilms = [];

  for(let i = 0; posters.length > i; i++) {
    console.log("🚀 ~ file: Films.js:70 ~ IsFilm ~ posters:", posters)
    
  }

}



const Films = () => {
  const [films, setFilms] = useState([]);
  const [open, setOpen] = useState(true);


  

  // useEffect((episode_id) => {
  // if(episode_id === posters.episode_id){

  // }
  // }, [])



  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    getAllData("https://swapi.dev/api/films/").then((data) => {
      if (data.results) {
        setFilms(data.results);
      } else {
        console.log("Error in films useEffect");
      }
    });
  }, []);

  return (
    <>
      {films.map((film) => {
        {/* console.log("🚀 ~ file: GetFilms.js:36 ~ {film.filter ~ film", film); */}
        {
          /* reuseable below just change for the api data ie. film, characters */
        }
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


        {  /* I want to set the image for each Films movie to the poster */}

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
              border: "1px dotted yellow",
                
            }}
          >
            <Grid item>
            <IsFilm />
              <Card 
              // sx={{ maxWidth: "365px", }}
              >
                <CardMedia
                  component="img"
                  alt=""
                  height="140"
                  image="/films/revengeOfTheSith.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" height="325px">
                    {opening_crawl}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};

export default Films;

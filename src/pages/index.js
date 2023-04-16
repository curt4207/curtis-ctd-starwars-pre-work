import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import Films from "./components/Films";

import Box from "@mui/material/Box";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import getAllData from "./api/getAllData";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ film }) {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getAllData("https://swapi.dev/api/people").then((data) => {
      setPeople(data.results);
    });
  }, []);

  return (
    <>
      <h1>Star Wars pre-Work</h1>
      <Box sx={{ 
        display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
        //  flexWrap: "wrap"
          }}>
        <Films />
      </Box>
    </>
  );
}

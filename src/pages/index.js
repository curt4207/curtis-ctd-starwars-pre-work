import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import Films from "./components/Films";
import ThemeToggle from "./components/ThemeToggle";

import {
  Experimental_CssVarsProvider as CssVarsProvider,
  useColorScheme,
} from '@mui/material/styles';

// MUI Imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import getAllData from "./api/getAllData";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ film }) {
  // add toggle light and dark with star wars icons and matching music

  return (
    <Box>
    <CssVarsProvider>
      <h1>Star Wars pre-Work</h1>
      <Grid container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
      >
      <ThemeToggle />
        <Grid
          item
          sx={{
            display: "grid",
            gridTemplateColumns: "0.2fr 0.2fr 0.2fr",
            border: "1px solid green",
          }}
        >
          <Films />
        </Grid>
      </Grid>
      </CssVarsProvider>
    </Box>

  );
}

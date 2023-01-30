import { Box, Grid } from "@mui/material";
import React from "react";
import "./MovieDetails.scss";

interface IMovieDetails {
  movie: any;
}

function MovieDetails({ movie }: IMovieDetails) {
  return (
    <Grid container spacing={2} className="container">
      <Grid item xs={4} className="image">
        <img src={movie.urlImage} alt="movie" />
      </Grid>
      <Grid item xs={8}>
        {movie.title}
      </Grid>
    </Grid>
  );
}

export default MovieDetails;

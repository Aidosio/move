import React from 'react';
import MovieCard from "./MovieCard";
import {Grid} from "@mui/material";
import {useWindowWidth} from "../../hooks/useWindowWidth";

const MovieList = ({movie}) => {
    const width = useWindowWidth()

    if (!movie) {
        return null
    }

    return (
        <Grid container spacing={2}>
            {movie.map(result => (
                <Grid  key={result.imdbID} item xs={width > 1024 ? 3 : width > 768 ? 6 : 12 }>
                    <MovieCard movie={result}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default MovieList;
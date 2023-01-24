import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import "../style/MoviePage.css"
import axios from "axios";
import EventIcon from '@mui/icons-material/Event';
import Groups2Icon from '@mui/icons-material/Groups2';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import {List, ListItem, ListItemIcon, ListItemText, SvgIcon, Typography} from "@mui/material";

const MoviePage = () => {
    const { imdbID } = useParams();
    const [movie, setMovie] = useState({});
    const group = [
        {title: movie.Released, icon: EventIcon},
        {title: movie.Actors, icon: Groups2Icon},
        {title: movie.Country, icon: PlaceIcon},
        {title: movie.Language, icon: LanguageIcon},
        {title: movie.Genre, icon: CollectionsBookmarkIcon},
        {title: movie.Plot, icon: ChatBubbleIcon},
    ]

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?apikey=9c227a60&i=${imdbID}`)
            .then(res => setMovie(res.data))
    }, [imdbID]);

    return (
        <div className={"movie-page"}>
            <div className="movie-page__poster">
                <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="movie-page__info">
                <Typography ml={2} variant="h3" gutterBottom>
                    {movie.Title}
                </Typography>
                <div className="movie-page__info___group">
                    <List>
                        {group.map((res, index) =>
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <SvgIcon component={res.icon} color="disabled" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={res.title}
                                    />
                                </ListItem>
                            )
                        }
                    </List>
                </div>
            </div>
        </div>
    );
};

export default MoviePage;
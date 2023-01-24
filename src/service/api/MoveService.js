import axios from "axios";

export const getSearchMovie = async (search, page = 1) => {
    const movie = await axios.get(`http://www.omdbapi.com/?apikey=9c227a60&s=${search}&page=${page}`);
    return movie;
}
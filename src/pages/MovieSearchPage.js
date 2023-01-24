import React, {useState} from 'react';
import SearchForm from "../components/Movie/SearchForm";
import MovieList from "../components/Movie/MovieList";
import {getSearchMovie} from "../service/api/MoveService";
import {getPageCount} from "../utils/Pages";
import {Backdrop, CircularProgress, Pagination} from "@mui/material";
import {useFeaching} from "../hooks/useFeaching";

const MovieSearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [page, setPage] = React.useState(1);
    const [totalCount, setTotalCount] = useState(1);
    const [error, serError] = useState('');

    const totalPage = getPageCount(totalCount, 10)

    const [getMovie, isLoad] = useFeaching(async (page) => {
        const {data} = await getSearchMovie(searchTerm, page)
        setTotalCount(data.totalResults)
        setResults(data.Search)
        serError(data.Error)
    })

    const handleChange = (event, value) => {
        setPage(value)
        getMovie(value)
    };
    const handleSearch = async (e) => {
        e.preventDefault()
        const value = 1
        setPage(1)
        getMovie(value)
    }

    return (
        <div>
            <SearchForm
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleSubmit={handleSearch}
                error={error}
            />
            <MovieList movie={results}/>
            <Backdrop
                sx={{color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={isLoad}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
            {totalCount > 1 ?
                <div style={{
                    margin: "65px 0 85px",
                    display: "flex",
                    flexDirection: "row-reverse"
                }}>
                    <Pagination count={totalPage} page={page} onChange={handleChange}/>
                </div>
                : null
            }
        </div>
    );
};

export default MovieSearchPage;
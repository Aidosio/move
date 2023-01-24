import './style/normilize.css';
import MovieSearchPage from "./pages/MovieSearchPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MoviePage from "./pages/MoviePage";
import {Container} from "@mui/material";
function App() {
  return (
      <BrowserRouter>
          <Container maxWidth="lg">
              <Routes>
                      <Route path="/" element={<MovieSearchPage />} />
                      <Route path="/movie/:imdbID" element={<MoviePage />} />
              </Routes>
          </Container>
      </BrowserRouter>
  );
}

export default App;

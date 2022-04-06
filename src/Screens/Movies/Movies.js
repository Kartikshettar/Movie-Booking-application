// impoerting required files
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Genres from "../../common/Genres/Genres"
import SingleContent from "../../common/SingleContent/SingleContent";
import CustomPagination from "../../common/Pagination/CustomPagination";
import useGenres from "../../hooks/useGenres";

//intializing page content genres to serach movies 
const Movies = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforURL = useGenres(selectedGenres);

  const fetchMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=594d4a2e07c4240e4c3b1540eb841369&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate=${page}&with_genres=${genreforURL}`
    const { data } = await axios.get(url);
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, [ genreforURL,page]);

  //display the movies 
  return (
    <div>
      <span className="pageTitle">Discover Movies</span>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {/* page navogation bar  */}
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={15} />
      )}
    </div>
  );
};


export default Movies;
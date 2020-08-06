import React, { useState, useEffect } from "react";

import "./Row.css";
import movieTrailer from "movie-trailer";

import instance from "../axios.js";
import YouTube from "react-youtube";

const baseURLimg = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  //movies це []
  //setMovies це функція що оновлює movies

  //baseURL: "https://api.themoviedb.org/3",
  useEffect(() => {
    //якщо [] змінеться , запустити один раз, коли рядок завантажується, і не запускати знову

    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      //setMovies передає в масив movies
      return request;
    }
    fetchData();
  }, [fetchUrl]);

 

  const opts = {
    height: "390",
    width: "100%",
    playesVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="rowPosters">
        {movies.map((m) => (
          <img
            className={`rowImg ${isLargeRow ? " bigImg" : ""}`}
            onClick={() => handleClick(m)}
            src={`${baseURLimg}${isLargeRow ? m.poster_path : m.backdrop_path}`}
            alt={m.name}
            key={m.id}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;

import React, { useState, useEffect } from "react";
import "./Banner.css";

import instance from "../../axios.js";
import requestsJS from "../../requests.js";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requestsJS.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, [requestsJS.fetchNetflixOriginals]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={
        movie
          ? {
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
            }
          : {
              backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/8502631a-7c16-4132-8656-d741da3b3d3e/8fc37780-5d2b-411f-a09c-0f39396a5075/UA-en-20200727-popsignuptwoweeks-perspective_alpha_website_small.jpg)`,
            }
      }
    >
      <div className="bannerContent">
        <h1 className="bannerTitle">
          {movie?.original_name || movie?.name || movie?.title}
        </h1>
        <div className="bannerButtons">
          {/* <button className="banButton">Play</button> */}
          <button className="banButton">My List</button>
        </div>
        <h1 className="bannerDescription">{truncate(movie?.overview, 150)}</h1>
      </div>
    </header>
  );
}

export default Banner;

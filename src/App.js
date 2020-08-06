import React from "react";

import Row from "./components/Row.jsx";
import requests from "./requests";
import Banner from "./components/Banner/Banner.jsx";
import Nav from "./components/NavBar/Nav.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />

      <Banner />

      <h1>Crate WebSite </h1>

      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movie" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries Movie" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

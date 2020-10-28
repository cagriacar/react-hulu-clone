import React, { useEffect, useState } from "react";
import "./style/Movie.css";
import VideoCard from "./videocard/VideoCard";
import axios from "./api/axios";
import FlipMove from "react-flip-move";

function Movie({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);
  return (
    <div className="movie">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Movie;

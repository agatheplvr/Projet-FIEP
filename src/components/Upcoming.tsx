import React, { useEffect, useState } from "react"

import movieApiClient from "../utils/movieApiClient";
import { ApiError, isApiError, Movie } from "../utils/typesApi"

import MovieCardListDisplay from "./MovieCardListDisplay";

export default function Upcoming() {
  const [upcomingMovieList, setUpcomingMovieList] = useState<Movie[] | null>();
  const [error, setFetchError] = useState<ApiError | null>();

  useEffect(() => {
    movieApiClient.getUpcomingMovieList().then((data) => {
      if (isApiError(data)) {
        setFetchError(data);
      } else {
        setUpcomingMovieList(data.results);
      }
    });
  }, [])

  return (
    <MovieCardListDisplay movieList={upcomingMovieList} heading="Upcoming" error={error} />
  );
}

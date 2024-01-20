import { ApiError, Movie } from "../utils/typesApi"
import SimpleMovieCard from "./SimpleMovieCard"

import SectionHeading from "./styled/SectionHeading"
import MoviesContainer from "./styled/MoviesContainer"

interface MovieCardListDisplayProps {
  movieList: Movie[] | null | undefined
  error: ApiError | null | undefined
  heading: string
}

export default function MovieCardListDisplay(
  // movieList: Movie[] | null | undefined,
  // error: ApiError | null,
  // heading: string,
  { movieList, error, heading }: MovieCardListDisplayProps
) {
  return (
    <div>
      <SectionHeading>{heading}</SectionHeading>
      <MoviesContainer>
        {!error && 
          movieList?.map((mov) => (
            <SimpleMovieCard movieData={mov} key={mov.id} />
          ))
        }
      </MoviesContainer>
      <p>{error?.message}</p>
    </div>
  )
}
import SearchBar from './SearchBar'
import MovieList from './MovieList'
import Pagination from './Pagination'
import PageContainer from "./styled/PageContainer";

export default function MoviesResultContainer() {
  return (
    <PageContainer>
      <SearchBar />
      <MovieList />
      <Pagination />
    </PageContainer>
  )
}
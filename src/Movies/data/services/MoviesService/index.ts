import type {
  CreditsResponse,
  GenreListResponse,
  MovieDetail,
  PaginatedMovies,
  VideosResponse,
} from '../../../../Common/core/types/Tmdb.types'

export interface MoviesService {
  getTrending(language: string, region: string): Promise<PaginatedMovies>
  getPopular(language: string, region: string): Promise<PaginatedMovies>
  getTopRated(language: string, region: string): Promise<PaginatedMovies>
  getUpcoming(language: string, region: string): Promise<PaginatedMovies>
  getGenres(language: string): Promise<GenreListResponse>
  getMovieVideos(movieId: number, language: string): Promise<VideosResponse>
  getMovieDetail(movieId: number, language: string): Promise<MovieDetail>
  getMovieCredits(movieId: number, language: string): Promise<CreditsResponse>
  getSimilarMovies(movieId: number, language: string): Promise<PaginatedMovies>
  getRecommendedMovies(movieId: number, language: string): Promise<PaginatedMovies>
}
import { Genre } from './genre';

export interface Movie {
  original_title: string;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  adult: boolean;
  vote_count: number;

}

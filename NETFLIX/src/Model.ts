export interface MovieList {
  category: string;
  items: item;
  title: string;
}

export interface item {
  page: number;
  results: Results[];
  total_pages: number;
  total_results: number;
  original_title: string;
  poster_path: string;
}

interface Results {
  poster_path: string;
  backdrop_path: string;
  original_title: string;
}

export interface SeriesInfo {
  id: number;
  original_name: string;
  backdrop_path: string;
  vote_average: number;
  number_of_seasons: number;
  overview: string;
  first_air_date: string;
  genres: [{ name: string; id: number }];
}

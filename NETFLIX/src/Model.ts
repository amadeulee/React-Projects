export interface MovieList {
  category: string;
  items: {
    page: number;
    results: Results[];
    total_pages: number;
    total_results: number;
  };
  title: string;
}

interface Results {
  poster_path: string;
  backdrop_path: string;
  original_title: string;
}

export interface SeriesInfo {
  original_name: string;
  backdrop_path: string;
}

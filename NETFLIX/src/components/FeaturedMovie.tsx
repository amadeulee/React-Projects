import { SeriesInfo } from '../Model';
import './FeaturedMovie.css';

type FeaturedMovieProps = {
  item: SeriesInfo;
};

export default ({ item }: FeaturedMovieProps) => {
  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal"></div>
      </div>
    </section>
  );
};

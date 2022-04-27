import { MovieList } from '../Model';
import './MovieRow.css';

type MovieRowProps = {
  item: MovieList;
};

const MovieRow = ({ item }: MovieRowProps) => {
  const { title, items } = item;
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        <div className="movieRow--list">
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                  alt={item.original_title}
                ></img>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;

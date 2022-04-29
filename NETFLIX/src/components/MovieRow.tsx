import { item, MovieList } from '../Model';
import ChosenDisplay from './ChosenDisplay';
import './MovieRow.css';

type MovieRowProps = {
  item: MovieList;
  frontDisplay: React.Dispatch<React.SetStateAction<item | undefined>>;
};

const MovieRow = ({ item, frontDisplay }: MovieRowProps) => {
  const { title, items } = item;
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        <div className="movieRow--list">
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              // <ChosenDisplay
              //   key={key}
              //   item={item}
              //   frontDisplay={frontDisplay}
              // />

              <div className="movieRow--item">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                  alt={item.original_title}
                  onClick={e => {
                    e.preventDefault();
                    frontDisplay(item);
                  }}
                ></img>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;

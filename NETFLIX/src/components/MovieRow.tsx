import { Item, MovieList, Results } from '../Model';
import ChosenDisplay from './ChosenDisplay';
import './MovieRow.css';

type MovieRowProps = {
  item: MovieList;
  frontDisplay: React.Dispatch<React.SetStateAction<Results | undefined>>;
};

const MovieRow = ({ item, frontDisplay }: MovieRowProps) => {
  const { title, items } = item;
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        <div className="movieRow--list">
          {items.results.length > 0 &&
            items.results.map((eachItem, key) => (
              // <ChosenDisplay
              //   key={key}
              //   item={item}
              //   frontDisplay={frontDisplay}
              // />

              <div key={key} className="movieRow--item">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${eachItem.poster_path}`}
                  alt={eachItem.original_title}
                  onClick={e => {
                    e.preventDefault();
                    frontDisplay(eachItem);
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

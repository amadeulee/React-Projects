import { SeriesInfo } from '../Model';
import './FeaturedMovie.css';

type FeaturedMovieProps = {
  item: SeriesInfo;
};

export default ({ item }: FeaturedMovieProps) => {
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  // item.genres.map(eachGenre => genres.push(eachGenre.name));
  // genres.push(item.genres.map(eachGenre => eachGenre.name));

  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }
  console.log(genres);
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
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} pontos</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? 's' : ''}
            </div>
          </div>
          <div className="featured--description">{item.overview}</div>
          <div className="featured--buttons">
            <a className="featured--watchbutton" href={`/watch/${item.id}`}>
              ▶ Assistir
            </a>
            <a className="featured--mylistbutton" href={`/list/add/${item.id}`}>
              + Minha Lista
            </a>
          </div>
          <div className="featured--genres">
            <strong>Gêneros: {genres.join(', ')}</strong>
          </div>
        </div>
      </div>
    </section>
  );
};
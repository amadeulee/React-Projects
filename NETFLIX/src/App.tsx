import { useEffect, useState } from 'react';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import MovieRow from './components/MovieRow';
import { MovieList } from './Model';
import Tmdb from './services/Tmdb';

function App() {
  const [movieList, setMovieList] = useState<MovieList[]>([]);
  const [featuredData, setFeaturedData] = useState<{}>();

  useEffect(() => {
    const loadAll = async () => {
      // Taking all lists
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Taking featured movie
      let originals = list.filter(i => i.category === 'originals');
      let randomOriginal = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );

      let chosen = originals[0].items.results[randomOriginal];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
      console.log(chosenInfo);
    };
    loadAll();
  }, []);
  return (
    <div className="page">
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} item={item} />
        ))}
      </section>
    </div>
  );
}

export default App;

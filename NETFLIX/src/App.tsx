import { useEffect, useState } from 'react';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import MovieRow from './components/MovieRow';
import { item, MovieList } from './Model';
import Tmdb from './services/Tmdb';

function App() {
  const [movieList, setMovieList] = useState<MovieList[]>([]);
  const [featuredData, setFeaturedData] = useState<{}>();
  const [blackHeader, setBlackHeader] = useState<boolean>(false);
  const [chosenDisplay, setChoseDisplay] = useState<item>();

  console.log(chosenDisplay);
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
    };
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);
  return (
    <div className="page">
      {chosenDisplay && (
        <div
          className="frontDisplay--outside"
          onClick={() => {
            setChoseDisplay(undefined);
          }}
        >
          <div className="frontDisplay">Teste</div>
        </div>
      )}
      <Header black={blackHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} item={item} frontDisplay={setChoseDisplay} />
        ))}
      </section>
    </div>
  );
}

export default App;

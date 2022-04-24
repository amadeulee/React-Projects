import { useState } from 'react';
import { Tweet } from './components/Tweet';
import { Cart } from './pages/Cart';
import { AppRoutes } from './Routes';

function App() {
  const [tweet, setTweet] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4',
  ]);

  function createTweet() {
    setTweet([...tweet, 'Tweet' + (tweet.length + 1)]);
  }
  return (
    // <AppRoutes />

    <div style={{ backgroundColor: 'gray', borderRadius: '5px' }}>
      {tweet.map(tweet => {
        return <Tweet text={tweet} />;
      })}
      <button
        onClick={createTweet}
        style={{
          backgroundColor: '#8257e6',
          padding: '6px 12px',
          margin: '10px',
          border: 0,
          color: '#fff',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
      >
        Add tweet
      </button>
      <button>Aqui</button>
    </div>
  );
}

export default App;

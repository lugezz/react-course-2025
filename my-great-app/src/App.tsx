import './App.css'

import MovieCard from './components/MovieCard';

const App = () => {

  return (
    <>
    <h2 className="text-3xl font-bold underline">
      Hello Vite + React!
    </h2>
    <div className="card-container">
      <MovieCard
        movie={{
          title: 'Inception',
          vote_average: 8.8,
          poster_path: 'oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
          release_date: '2010-07-16',
          original_language: 'en',
          id: 12345,
        }}
        setisMovieID={(id: number) => console.log(`Selected movie ID: ${id}`)}
      />
    </div>
  </>
)};

export default App

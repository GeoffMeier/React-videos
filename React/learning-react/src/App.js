import logo from './logo.svg';
import './App.css';
import { PropTypes } from 'react';
import { Counter } from './Counter';
import { Accordion } from './Accordion';
import { Input } from './Input';
import { MoviesList } from './movies/MoviesList';

function App() {
  return (
    <div className="App">
      <MoviesList/>
      
    </div>
  );
}



export default App;

import './App.css';
import { MoviesList } from './movies/MoviesList';
import React from 'react';
import { MovieDetails } from './movies/MovieDetails';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  

} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
       <Routes>
           <Route path='/movie/:id' element={<MovieDetails/>}>
            </Route>
            <Route path='/' element={<MoviesList/>}>
              
            </Route>
        </Routes>
      </div>
    </Router>
  );
}



export default App;

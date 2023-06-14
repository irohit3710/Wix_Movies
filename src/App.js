// import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './Pages/Home/home';
import MovieList from './components/movieList/movieList';
import Movie from './Pages/movieDetails/Movie';




function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element = {<Home />}></Route>
          <Route path='movie/:id' element = {<Movie />}></Route>
          <Route path='movies/:type' element = {<MovieList />}></Route>
          <Route path='/*' element = {<h1>Error 404</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
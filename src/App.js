import './App.css';
import Header from './components/header/Header';
import Index from './components/home/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieCategory from './components/category/MovieCategory';
import CommingSoonMovies from './components/category/CommingSoonMovies';
import Category from './components/category/Category';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Index />} />
          {/* <Route path="/movies" element={<MovieCategory />} /> */}
          <Route path="/movies" element={<Category />} />

          {/* <Route path="/movies" element={<CommingSoonMovies />} /> */}
        </Routes>
      </Router>
      {/* <Index /> */}


    </div>
  );
}

export default App;

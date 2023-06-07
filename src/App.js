import './App.css';
import Header from './components/header/Header';
import Index from './components/home/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Category from './components/category/Category';
import VideoPlaying from './components/videoplay/VideoPlaying';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="*" element={<Index />} />
          <Route path="/movies" element={<Category />} />
          <Route path="/video/:id" element={<VideoPlaying />} /> {/*} az url tartalmaz id-t is*/}
        </Routes>
      </Router>



    </div>
  );
}

export default App;

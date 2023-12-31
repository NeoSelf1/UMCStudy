import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Movies } from './components/pages/Movies';
import { Celebrity } from './components/pages/Celebrity';
import { Header } from './components/Header';
import { TV } from './components/pages/TV';
import { Home } from './components/pages/Home';
import './App.css';
import MovieDetail from './components/pages/MovieDetail';
import { NotFound } from './components/pages/NotFound';
import Weather from './components/pages/Weather';
import Login from './components/pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="weather" element={<Weather />} />
        <Route path="tv" element={<TV />} />
        <Route path="movies" element={<Movies />} />
        <Route path="celebrity" element={<Celebrity />} />
        <Route path="login" element={<Login />} />
        <Route path="/movie/:name" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

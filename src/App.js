import logo from './logo.svg';
import './App.css';
import ActorsPage from './pages/ActorsPage/ActorsPage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <div>
     <ActorsPage/>
     <MoviesPage/>
   </div>
  );
}

export default App;

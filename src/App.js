import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage'
import MoviesPage from './components/MoviesPage/MoviesPage'
import NotFound from './components/NotFound/NotFound'
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage'
import routes from './routes'
import AppBar from './components/AppBar/AppBar'

const App = () => (
  <div>
    <AppBar />
    <Switch>
      <Route exact path={routes.homepage} component={HomePage} />
      <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
      <Route path={routes.moviesPage} component={MoviesPage} />
      <Route component={NotFound}/>  
    </Switch>
  </div>
);

export default App;

      // key c380f664e1da9ad09772f37426d65949
      // fetch https://api.themoviedb.org/3/movie/550?api_key=c380f664e1da9ad09772f37426d65949
      // access key eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzgwZjY2NGUxZGE5YWQwOTc3MmYzNzQyNmQ2NTk0OSIsInN1YiI6IjYwMWQwNWE2ODFhN2ZjMDAzZTA0Njc0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lbHosgZWFbMDQIooC6wcWfaoSquyiaadZvGud4YW7R8

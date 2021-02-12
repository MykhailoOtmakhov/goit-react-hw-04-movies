import './App.css';
import React, {lazy, Suspense} from 'react'
import {Route, Switch} from 'react-router-dom';
// import HomePage from './components/HomePage/HomePage'
// import MoviesPage from './components/MoviesPage/MoviesPage'
// import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage'
import NotFound from './components/NotFound/NotFound'
import routes from './routes'
import AppBar from './components/AppBar/AppBar'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const HomePageView = lazy(() => import('./components/HomePage/HomePage' /*webpackChunkName: "homepage-view" */))
const MoviesPageView = lazy(() => import('./components/MoviesPage/MoviesPage' /*webpackChunkName: "movies-page-view" */))
const MovieDetailsPageView = lazy(() => import('./components/MovieDetailsPage/MovieDetailsPage' /*webpackChunkName: "movie-details-page-view" */))

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    }>
      <Switch>
        <Route exact path={routes.homepage} component={HomePageView} />
        <Route path={routes.movieDetailsPage} component={MovieDetailsPageView} />
        <Route path={routes.moviesPage} component={MoviesPageView} />
        <Route component={NotFound}/>  
      </Switch>
    </Suspense>
  </>
);

export default App;

      // key c380f664e1da9ad09772f37426d65949
      // fetch https://api.themoviedb.org/3/movie/550?api_key=c380f664e1da9ad09772f37426d65949
      // access key eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzgwZjY2NGUxZGE5YWQwOTc3MmYzNzQyNmQ2NTk0OSIsInN1YiI6IjYwMWQwNWE2ODFhN2ZjMDAzZTA0Njc0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lbHosgZWFbMDQIooC6wcWfaoSquyiaadZvGud4YW7R8

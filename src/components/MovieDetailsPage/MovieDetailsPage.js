import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios';
import {NavLink, Route} from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews'

class MovieDetailsPage extends Component {
    state = { 
        // movie: [],
        genres: [],
        title: '',
        release_date: null,
        overview: '',
    }

    async componentDidMount(){
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=c380f664e1da9ad09772f37426d65949&language=en-US`);
        console.log(response.data);
        this.setState({...response.data})
    }

    render() {
        const {id, title, genres, overview, vote_average, release_date, poster_path} = this.state;
        const { match } = this.props;

        // const releaseDate = this.state.release_data;
        // const shortData = releaseDate.slice(0,4)

        // console.log(releaseDate);
        return (
            <div>
                <h1>{title} {release_date}</h1>
                <p>Average rating: {vote_average}</p>
                <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                    <ul>
                        {genres.map(({id, name}) => (
                            <li key={id}>{name}</li>
                        ))}
                    </ul>
                    <li>
                        <NavLink 
                          exact
                          to ={`${match.url}/cast`}
                          className="NavLink"
                          activeClassName="NavLink--active"
                        >
                          Cast
                        </NavLink>
                      </li>  
                      <li>
                        <NavLink 
                          to ={`${match.url}/reviews`}
                          className="NavLink"
                          activeClassName="NavLink--active"
                        >
                          Reviews
                        </NavLink>
                      </li> 
                    <Route path={`${match.path}/cast`} component={Cast} />
                    <Route path={`${match.path}/reviews`} component={Reviews} />

            </div>
        )
    }
}

export default MovieDetailsPage

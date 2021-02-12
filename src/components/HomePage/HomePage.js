import Axios from 'axios';
import React, { Component } from 'react'
import MovieList from '../MovieList/MovieList'

class HomePage extends Component {
    state = {
        movies: [],
        results: []
    }

    async componentDidMount (){
        const response = await Axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=c380f664e1da9ad09772f37426d65949');

        this.setState({results: response.data.results})
    } 

    render() {
        const {results} = this.state;
        return (
            <div>
                <MovieList results={results}/>
            </div>
        )
    }
}

export default HomePage





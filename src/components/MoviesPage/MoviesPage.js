import Axios from 'axios';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from '../Searchbar/Searchbar';
import fetchAPI from '../MovieApiService'
import MovieList from '../MovieList/MovieList'
import getQueryParams from '../../utils/getQueryParams'

class MoviesPage extends Component {
    state = {
        query:'',
        movies: [],
        results: []
    }

    fetchMovieWithQuery = query => fetchAPI.fetchMovie(query)
    .then(data => this.setState({results: data.results}))
    .catch(error => console.log(error))    

    componentDidMount() {
        const { query } = getQueryParams(this.props.location.search)
        // if(this.props.location.search.trim() === ''){
        //     toast('Enter some word!')
        //     return;}
        if(query) {
            this.fetchMovieWithQuery(query)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {query :prevQuery} = getQueryParams(prevProps.location.search)
        const {query :nextQuery} = getQueryParams(this.props.location.search)

        if(prevQuery !== nextQuery){
            this.fetchMovieWithQuery(nextQuery)
        }
    }

    handleQueryChange = query =>{
        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `query=${query}`
        })
    }

    render() {
        const {results} = this.state;
        return (
            <div>
                <Searchbar onSubmit={this.handleQueryChange} />            
                <MovieList results={results}/>
            </div>
        )
    }
}

MoviesPage.propTypes={
    query: PropTypes.string,
    movies: PropTypes.array,
    results: PropTypes.array,
}
export default MoviesPage
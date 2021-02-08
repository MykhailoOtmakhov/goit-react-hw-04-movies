import Axios from 'axios';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from '../Searchbar/Searchbar';
import fetchAPI from '../MovieApiService'
import MovieList from '../MovieList/MovieList'

class MoviesPage extends Component {
    state = {
        query:'',
        movies: [],
        results: []
    }

    // handleQueryChange = evt => {
    //     this.setState({ query: evt.currentTarget.value.toLowerCase()})
    // }

    handleFormSubmit = query =>{
        this.setState({query})
        console.log(query);
    }

    async componentDidMount() {
        const actQuery = this.state.query;
        const response = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c380f664e1da9ad09772f37426d65949&language=en-US&query=${actQuery}&page=1&include_adult=false`);
        console.log(response.data);
        console.log(actQuery);

        this.setState({query: actQuery, results: response.data.results})
    }
        
    // } 
    // (prevProps, prevState){
        //     const query = this.props.query;
    
        //     fetchAPI.fetchMovie(query)
        //     .then(results => this.setState({results}))
        //     .catch(error => this.setState({error}))
        // }
    
            // if(this.state.query.length){

    

    render() {
        const {results, query} = this.state;
        console.log(this.props.match.url);
        return (
            <div>
                <Searchbar onSubmit={this.handleFormSubmit} />            
                <MovieList results={this.state.results}/>
            </div>
        )
    }
}

export default MoviesPage
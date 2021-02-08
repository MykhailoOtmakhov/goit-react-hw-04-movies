import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'
import {NavLink, Route} from 'react-router-dom';

class Cast extends Component {
    state = {
        credits: [],
        cast: []
    }

    async componentDidMount(){
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/credits?api_key=c380f664e1da9ad09772f37426d65949&language=en-US`);
        console.log(response.data);
        this.setState({...response.data})
    }

    render() {
        const { cast } = this.state;
        return (
            <div>
                <ul>
                    {cast.map(({id,name,profile_path}) =>(
                        <li key={id}>
                            <p>{name}</p>
                            <img 
                                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                                alt={name}/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}


export default Cast
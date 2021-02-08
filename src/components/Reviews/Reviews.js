import React, { Component } from 'react'
import Axios from 'axios'

class Reviews extends Component {
    state = {
        results: []
    }

    async componentDidMount(){
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/reviews?api_key=c380f664e1da9ad09772f37426d65949&language=en-US&page=1`);
        console.log(response.data);
        this.setState({...response.data})
    }

    render() {
        const { results } = this.state;
        return (
            <div>
                <ul>
                    {results.map(({id, author, content}) =>(
                        <li key={id}>
                            <p>{author}</p>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Reviews
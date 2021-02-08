import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const MovieList = ({results, match}) => {
    return (
        <ul>
            {results.map(result => (
                <li key = {result.id}>
                    <Link to={`${match.url}movies/${result.id}`}>{result.title}</Link>
                </li>
            ))}
        </ul>
    )
}

export default withRouter(MovieList)
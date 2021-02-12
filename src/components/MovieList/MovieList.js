import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const MovieList = ({results, location}) => {
    return (
        <ul>
            {results.map(result => (
                <li key = {result.id}>
                    <Link 
                        to={{
                            pathname: `movies/${result.id}`,
                            state: {from: location},
                        }}
                    >
                        {result.title}</Link>
                </li>
            ))}
        </ul>
    )
}

export default withRouter(MovieList)
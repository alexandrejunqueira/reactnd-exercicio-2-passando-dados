import React, { Component } from 'react';

class MovieList extends Component {
	render() {
    	return (
			<ol>
          		{this.props.data.map(movie => (
					<li key={movie.id}>
                        <h2>{movie.name}</h2>
                        {movie.likedBy.length > 0 ?
                            <div>
                                <p>Liked By:</p>
                                <ul>
                                    {movie.likedBy.map(user => <li key={`${movie.id}-${user.id}`}>{user.name}</li>)}
                                </ul>
                            </div>
                            : 
                            <span>None of the current users liked this movie</span>
                        }
                    </li>
				))}
			</ol>
        )  
    }
}

export default MovieList;
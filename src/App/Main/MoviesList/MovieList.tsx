import React from 'react';
import { IMovie, Movie } from './Movie/Movie';
import './MovieList.less';
import { getMockedData } from './MoviieList.service';

export const MovieList = () => {
	const data: IMovie[] = getMockedData();
	return (
		<>
			<h1>MovieList</h1>
			<div className='movie-list'>
				{data.map((movie: IMovie) => {
					return (
						<Movie key={movie.id} movie={movie}/>
					);
				})}
			</div>
		</>
	);
};

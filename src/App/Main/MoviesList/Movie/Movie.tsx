import React, { FC } from 'react';
import './Movie.less';

export interface IMovie {
	budget: number;
	genres: string[];
	id: number;
	overview: string;
	poster_path: string;
	release_date: string;
	revenue: number;
	runtime: number;
	tagline: string;
	title: string;
	vote_average: number;
	vote_count: number;
}

interface IMovieProps {
	movie: IMovie;
}

export const Movie: FC<IMovieProps> = ({movie}) => {
	return (
		<div className='movie-card'>
			<img src={movie.poster_path} alt='Poster img'/>
			<div className='movie-card__description'>
				<div>
					<h3>{movie.title}</h3>
					<p>{movie.genres.join(' & ')}</p>
				</div>
				<p>{movie.release_date}</p>
			</div>
		</div>
	);
};

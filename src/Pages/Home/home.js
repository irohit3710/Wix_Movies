import React from 'react'
import './home.css'
import { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom';
import MovieList from '../../components/movieList/movieList';
import {FaStar} from 'react-icons/fa';



const Home = () => {

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=9adb7552d5426b291208e89593dd81c1&language=en-US")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
        // .then(data => console.log(data));
    }, [])

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    // interval={3}
                    transitionTime={700}
                    infiniteLoop={true}
                    showStatus={false}
                    // axis='vertical'
                    // emulateTouch={true}
                    // useKeyboardArrows={true}
                    // swipeable={false}
                    // animationHandler='slide'

                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} key ={movie.id}>
                                <div className='posterImage'>
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average : ""}
                                            <FaStar className='icons star' />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList />
            </div>
        </>
    )
}

export default Home
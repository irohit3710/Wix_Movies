import React from "react";
import { Link } from "react-router-dom";
import './HeaderStyle.css';

const Header = () => {
    return (
        <div className="header">
             <div className="headerleft">
                <Link to="/"><img className="header_icon" src="https://i.postimg.cc/SNjcLVzC/Yellow-Minimalist-Round-Shaped-Cafe-Logo.png" alt=""/></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
             </div>
        </div>
    )
}

export default Header


// https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png

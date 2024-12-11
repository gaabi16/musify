import React from "react";
import "../assets/Song.css";

const Song = ({ name, artist, image }) => {
    return (
        <div className="song">
            <img src={image} alt={`${name} album cover`} />
            <p>{name}</p>
            <hr/ >
            <p>{artist}</p>
        </div>
    );
};

export default Song;

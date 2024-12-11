import React from "react";
import ArtistCard from "./ArtistCard";
import "../assets/Playlist.css";
import "../assets/PlaylistCard.css";

const Artist = ({ onSelect }) => {
  const artists = [
    {
      id: "6eUKZXaKkcviH0Ku9w2n3V", // Ed Sheeran
      name: "Ed Sheeran",
      image: "https://lh3.googleusercontent.com/jQoBIAS6JjFGpcqQY1M_Mh3AasOvFENCdVRxkgax1a0K6qiq7AgE3MbJ6Jtt-Jndcarvoawmrg66KTny=w544-h544-p-l90-rj",
    },
    {
      id: "1r4hJ1h58CWwUQe3MxPuau", // Maluma
      name: "Maluma",
      image: "https://www.ticketcorner.ch/magazine/fileadmin/_processed_/8/d/csm_maluma-1164x600-vs2_f2160fc0cd.jpg",
    },
  ];

  return (
    <div className="leftAlignedContainer">
      <h2 className="playlistsTitle">Artists</h2>
      <div className="playlistCardContainer">
        {artists.map((artist) => (
          <ArtistCard
            key={artist.id}
            name={artist.name}
            image={artist.image}
            onClick={() => onSelect(artist.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Artist;

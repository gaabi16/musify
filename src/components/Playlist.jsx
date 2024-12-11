import React from "react";
import PlaylistCard from "./PlaylistCard";
import "../assets/Playlist.css";
import "../assets/PlaylistCard.css";

const Playlist = ({ onSelect }) => {
  const playlists = [
    {
      id: "5KJDMJe9EJ7QRz8FG2MIpI",
      name: "Best Songs of 2024",
      image: "https://assets.exclaim.ca/dr2uqw6xy/image/upload/c_limit,w_890/f_auto/q_auto/bestsongs2024_594c74273a?_a=BAVAfVIB0",
    },
  ];

  return (
    <div className="leftAlignedContainer">
      <h2 className="playlistsTitle">Playlists</h2>
      <div className="playlistCardContainer">
        {playlists.map((playlist) => (
          <PlaylistCard
            key={playlist.id}
            name={playlist.name}
            image={playlist.image}
            onClick={() => onSelect(playlist.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Playlist;

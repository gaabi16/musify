import React, { useState } from "react";
import PlaylistCard from "./PlaylistCard";
import DataFetcher from "./DataFetcher";
import Song from "./Song";
import "../assets/Playlist.css"; 
import "../assets/PlaylistCard.css";

const Playlist = () => {
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);
  const [playlists] = useState([
    {
      id: "5KJDMJe9EJ7QRz8FG2MIpI", 
      name: "Best Songs of 2024",
      image: "https://assets.exclaim.ca/dr2uqw6xy/image/upload/c_limit,w_890/f_auto/q_auto/bestsongs2024_594c74273a?_a=BAVAfVIB0", 
    },
  ]);

  const renderPlaylistData = ({ data, isLoading, error }) => {
    if (isLoading) {
      return <div className="loadingMessage">Loading songs...</div>;
    }

    if (error) {
      return <div className="errorMessage">{error}</div>;
    }

    const songs = data?.tracks?.items?.map((item) => ({
      name: item.track.name,
      artist: item.track.artists[0].name,
      image: item.track.album.images[0]?.url || "",
    }));

    return (
      <div className="songsContainer">
        {songs?.map((song, index) => (
          <Song key={index} name={song.name} artist={song.artist} image={song.image} />
        ))}
      </div>
    );
  };

  const handlePlaylistClick = (id) => {
    setSelectedPlaylistId(id);
  };

  return (
    <div className="leftAlignedContainer">
      {!selectedPlaylistId ? (
        <div>
          <h2 className="playlistsTitle">Playlists</h2>
          <div className="playlistCardContainer">
            {playlists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                name={playlist.name}
                image={playlist.image}
                onClick={() => handlePlaylistClick(playlist.id)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <DataFetcher
            type="playlists"
            id={selectedPlaylistId}
            renderData={renderPlaylistData}
          />
        </div>
      )}

      {selectedPlaylistId && (
        <div className="backButtonContainer">
          <button
            onClick={() => setSelectedPlaylistId(null)}
            className="backButton"
          >
            Back to Playlists
          </button>
        </div>
      )}
    </div>
  );
};

export default Playlist;

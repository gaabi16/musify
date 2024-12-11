import React, { useState } from "react";
import ArtistCard from "./ArtistCard";
import DataFetcher from "./DataFetcher";
import Song from "./Song";
import "../assets/Playlist.css"; 
import "../assets/PlaylistCard.css"; 

const Artist = () => {
  const [selectedArtistId, setSelectedArtistId] = useState(null);
  const [artists] = useState([
    {
      id: "6eUKZXaKkcviH0Ku9w2n3V", // ed sheeran
      name: "Ed Sheeran",
      image: "https://lh3.googleusercontent.com/jQoBIAS6JjFGpcqQY1M_Mh3AasOvFENCdVRxkgax1a0K6qiq7AgE3MbJ6Jtt-Jndcarvoawmrg66KTny=w544-h544-p-l90-rj", // Example artist image URL
    },
    {
      id: "1r4hJ1h58CWwUQe3MxPuau", // maluma
      name: "Maluma",
      image: "https://www.ticketcorner.ch/magazine/fileadmin/_processed_/8/d/csm_maluma-1164x600-vs2_f2160fc0cd.jpg",
    },
  ]);

  const renderArtistData = ({ data, isLoading, error }) => {
    if (isLoading) {
      return <div className="loadingMessage">Loading songs...</div>;
    }

    if (error) {
      return <div className="errorMessage">{error}</div>;
    }

    const songs = data?.tracks?.map((track) => ({
      name: track.name,
      artist: track.artists[0].name,
      image: track.album.images[0]?.url || "",
    }));

    return (
      <div className="songsContainer">
        {songs?.map((song, index) => (
          <Song
            key={index}
            name={song.name}
            artist={song.artist}
            image={song.image}
          />
        ))}
      </div>
    );
  };

  const handleArtistClick = (id) => {
    setSelectedArtistId(id);
  };

  return (
    <div className="leftAlignedContainer">
      {!selectedArtistId ? (
        <div>
          <h2 className="playlistsTitle">Artists</h2>
          <div className="playlistCardContainer">
            {artists.map((artist) => (
              <ArtistCard
                key={artist.id}
                name={artist.name}
                image={artist.image}
                onClick={() => handleArtistClick(artist.id)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <DataFetcher
            type="artists"
            id={selectedArtistId}
            renderData={renderArtistData}
          />
        </div>
      )}

      {selectedArtistId && (
        <div className="backButtonContainer">
          <button
            onClick={() => setSelectedArtistId(null)}
            className="backButton"
          >
            Back to Artists
          </button>
        </div>
      )}
    </div>
  );
};

export default Artist;

import React, { useState } from "react";
import DataFetcher from "./DataFetcher";
import Song from "./Song";
import ArtistCard from "./ArtistCard";
import PlaylistCard from "./PlaylistCard";
import "../assets/Playlist.css";
import "../assets/PlaylistCard.css";

const MusicLibrary = () => {
  const [selectedArtistId, setSelectedArtistId] = useState(null);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);

  const artists = [
    {
      id: "6eUKZXaKkcviH0Ku9w2n3V", // Ed Sheeran
      name: "Ed Sheeran",
      image:
        "https://lh3.googleusercontent.com/jQoBIAS6JjFGpcqQY1M_Mh3AasOvFENCdVRxkgax1a0K6qiq7AgE3MbJ6Jtt-Jndcarvoawmrg66KTny=w544-h544-p-l90-rj",
    },
    {
      id: "1r4hJ1h58CWwUQe3MxPuau", // Maluma
      name: "Maluma",
      image:
        "https://www.ticketcorner.ch/magazine/fileadmin/_processed_/8/d/csm_maluma-1164x600-vs2_f2160fc0cd.jpg",
    },
  ];

  const playlists = [
    {
      id: "5KJDMJe9EJ7QRz8FG2MIpI", // Example playlist
      name: "Best Songs of 2024",
      image:
        "https://assets.exclaim.ca/dr2uqw6xy/image/upload/c_limit,w_890/f_auto/q_auto/bestsongs2024_594c74273a?_a=BAVAfVIB0",
    },
  ];

  const renderSongs = ({ data, isLoading, error }) => {
    if (isLoading) {
      return <div className="loadingMessage">Loading songs...</div>;
    }

    if (error) {
      return <div className="errorMessage">{error}</div>;
    }

    const songs =
      data?.tracks?.items?.map((item) => ({
        name: item.track.name,
        artist: item.track.artists[0].name,
        image: item.track.album.images[0]?.url || "",
      })) ||
      data?.tracks?.map((track) => ({
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

  const handleBack = () => {
    setSelectedArtistId(null);
    setSelectedPlaylistId(null);
  };

  return (
    <div className="leftAlignedContainer">
      {selectedArtistId ? (
        <div>
          <DataFetcher
            type="artists"
            id={selectedArtistId}
            renderData={renderSongs}
          />
          <div className="backButtonContainer">
            <button onClick={handleBack} className="backButton">
              Back to Library
            </button>
          </div>
        </div>
      ) : selectedPlaylistId ? (
        <div>
          <DataFetcher
            type="playlists"
            id={selectedPlaylistId}
            renderData={renderSongs}
          />
          <div className="backButtonContainer">
            <button onClick={handleBack} className="backButton">
              Back to Library
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="playlistsTitle">Artists</h2>
          <div className="playlistCardContainer">
            {artists.map((artist) => (
              <ArtistCard
                key={artist.id}
                name={artist.name}
                image={artist.image}
                onClick={() => setSelectedArtistId(artist.id)}
              />
            ))}
          </div>

          <h2 className="playlistsTitle">Playlists</h2>
          <div className="playlistCardContainer">
            {playlists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                name={playlist.name}
                image={playlist.image}
                onClick={() => setSelectedPlaylistId(playlist.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicLibrary;

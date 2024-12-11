import React from "react";

const PlaylistCard = ({ name, image, onClick }) => {
  return (
    <div className="song" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={image} alt={`${name} cover`} />
      <p>{name}</p>
    </div>
  );
};

export default PlaylistCard;

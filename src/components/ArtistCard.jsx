import React from "react";

const ArtistCard = ({ name, image, onClick }) => {
  return (
    <div className="song" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={image} alt={`${name} cover`} />
      <p>{name}</p>
    </div>
  );
};

export default ArtistCard;

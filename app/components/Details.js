import React from "react";
import { usePlayer } from "../context";

const Details = () => {
  const { tracks, playBackData } = usePlayer();
  return (
    <div className="details">
      <h3>{tracks[playBackData.id]?.title || ""}</h3>
    </div>
  );
};

export default Details;

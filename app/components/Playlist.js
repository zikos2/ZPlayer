import React from "react";

import { usePlayer } from "../context";
import Track from "./Track";

const Playlist = () => {
  const { tracks, trackSelected } = usePlayer();

  return (
    <div className="playlist">
      {tracks.map((track) => (
        <Track key={track.id} trackSelected={trackSelected} track={track} />
      ))}
    </div>
  );
};

export default Playlist;

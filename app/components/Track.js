import classNames from "classnames";
import React from "react";
import { usePlayer } from "../context";

const Track = ({ track, trackSelected }) => {
  const { playBackData } = usePlayer();

  const selected = classNames({
    selected: track.id === playBackData.id ? true : false,
  });
  return (
    <div
      className={`title ${selected}`}
      onClick={() => {
        trackSelected(track.id);
      }}
    >
      {track.title}
    </div>
  );
};

export default Track;

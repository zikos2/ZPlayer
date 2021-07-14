import React from "react";

import { usePlayer } from "../context";
import { formatMilliseconds } from "../utils";

const Progress = () => {
  const { playBackData, handleProgressClick } = usePlayer();

  return (
    <div className="progress">
      <span className="player__time-elapsed">{playBackData.elapsed}</span>
      <progress
        value={String(playBackData.position)}
        max="1"
        onClick={handleProgressClick}
      ></progress>
      <span className="player__time-total">
        {formatMilliseconds(playBackData.total)}
      </span>
    </div>
  );
};

export default Progress;

import React from "react";
import ClassNames from "classnames";

import { usePlayer } from "../context";

const Player = () => {
  const { backward, forward, stop, random, togglePlay, playBackData } =
    usePlayer();

  const playPauseClass = ClassNames({
    "fa fa-play": playBackData.playStatus === "PLAYING" ? false : true,
    "fa fa-pause": playBackData.playStatus === "PLAYING" ? true : false,
  });
  return (
    <div className="player">
      <div className="player__backward">
        <button onClick={backward}>
          <i className="fa fa-backward"></i>
        </button>
      </div>
      <div className="player__main">
        <button onClick={togglePlay}>
          <i className={playPauseClass}></i>
        </button>
        <button onClick={stop}>
          <i className="fa fa-stop"></i>
        </button>
        <button onClick={random}>
          <i className="fa fa-random"></i>
        </button>
      </div>
      <div className="player__forward">
        <button onClick={forward}>
          <i className="fa fa-forward"></i>
        </button>
      </div>
    </div>
  );
};

export default Player;

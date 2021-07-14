import React from "react";
import Sound from "react-sound";

import { usePlayer } from "../context";

const SoundPlayer = () => {
  const { playBackData, handleSongPlaying, playNext } = usePlayer();

  return (
    <Sound
      url={playBackData.url || ""}
      autoLoad={true}
      playStatus={playBackData.playStatus}
      onPlaying={handleSongPlaying}
      position={playBackData.playFromPosition}
      onFinishedPlaying={playNext}
    />
  );
};

export default SoundPlayer;

import React, { createContext, useContext, useEffect, useState } from "react";
import Sound from "react-sound";

import { formatMilliseconds, getTracksFromFolder } from "./utils";

const playerContext = createContext({});

export function ProvidePlayer({ children }) {
  const player = useProvidePlayer();
  return (
    <playerContext.Provider value={player}>{children}</playerContext.Provider>
  );
}

export const usePlayer = () => {
  return useContext(playerContext);
};

function useProvidePlayer() {
  const [tracks, setTracks] = useState([]);
  const [playBackData, setPlayBackData] = useState({
    total: 0,
    elapsed: "00:00",
    position: 0,
    playFromPosition: 0,
    playStatus: Sound.status.PAUSED,
    url: "",
    id: 0,
  });

  const trackSelected = (id) => {
    setPlayBackData({
      ...playBackData,
      playFromPosition: 0,
      position: 0,
      id: id,
      url: tracks[id].streamUrl,
    });
  };

  const handleSongPlaying = (audio) => {
    setPlayBackData({
      ...playBackData,
      elapsed: formatMilliseconds(audio.position),
      total: audio.duration,
      position: audio.position / audio.duration,
      playFromPosition: audio.position,
    });
  };

  const handleProgressClick = (e) => {
    const clickedSpot = e.nativeEvent.offsetX;
    const totalWidth = e.nativeEvent.target.clientWidth;
    setPlayBackData({
      ...playBackData,
      playFromPosition: (clickedSpot / totalWidth) * playBackData.total,
    });
  };

  const togglePlay = () => {
    if (playBackData.playStatus === Sound.status.PLAYING) {
      setPlayBackData({
        ...playBackData,
        playStatus: Sound.status.PAUSED,
      });
    } else {
      setPlayBackData({
        ...playBackData,
        playStatus: Sound.status.PLAYING,
      });
    }
  };

  const forward = () => {
    if (playBackData.playFromPosition + 1000 * 10 < playBackData.total) {
      setPlayBackData({
        ...playBackData,
        playFromPosition: playBackData.playFromPosition + 1000 * 10,
      });
    }
  };

  const backward = () => {
    setPlayBackData({
      ...playBackData,
      playFromPosition: playBackData.playFromPosition - 1000 * 10,
    });
  };

  const stop = () => {
    setPlayBackData({
      ...playBackData,
      playStatus: Sound.status.STOPPED,
      playFromPosition: 0,
      position: 0,
    });
  };

  const random = () => {
    const trackId = Math.floor(Math.random() * tracks.length - 1);
    setPlayBackData({
      ...playBackData,
      playFromPosition: 0,
      position: 0,
      id: trackId,
      url: tracks[trackId].streamUrl,
    });
  };

  const playNext = () => {
    setPlayBackData({
      ...playBackData,
      playFromPosition: 0,
      position: 0,
      id: playBackData.id + 1,
      url: tracks[playBackData.id + 1].streamUrl,
    });
  };

  useEffect(() => {
    if (tracks.length === 0) {
      const tracksFromFile = getTracksFromFolder(process.env.FOLDER_LOCATION);
      setTracks(tracksFromFile);
      setPlayBackData({
        ...playBackData,
        url: tracksFromFile[playBackData.id].streamUrl,
      });
    }
  }, []);

  return {
    trackSelected,
    handleSongPlaying,
    handleProgressClick,
    togglePlay,
    forward,
    backward,
    stop,
    random,
    playNext,
    playBackData,
    tracks,
  };
}

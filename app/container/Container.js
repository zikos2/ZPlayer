import React, { useState, useEffect } from "react";

import Player from "../components/Player";
import Details from "../components/Details";
import Progress from "../components/Progress";
import SoundPlayer from "../components/SoundPlayer";
import Playlist from "../components/Playlist";

const Container = () => {
  return (
    <div className="container">
      <Details />
      <Player />
      <Progress />
      <SoundPlayer />
      <Playlist />
    </div>
  );
};

export default Container;

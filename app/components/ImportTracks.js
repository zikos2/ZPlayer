import React from 'react'
import { remote } from "electron";

import { usePlayer } from '../context';

const ImportTracks = () => {
    const { updateTracksFolder } = usePlayer();

  const importPlaylist = () => {
    remote.dialog.showOpenDialog({
      properties: ['openDirectory']
    }).then((path)=>{
      updateTracksFolder(path.filePaths[0]+"/")
    })
  }
    return (
        <div className="importBox">
            <button className="importBtn" onClick={importPlaylist}>Import playlist</button>
        </div>
    )
}

export default ImportTracks

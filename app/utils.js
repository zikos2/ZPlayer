import fs from "fs";

export const formatMilliseconds = (milliseconds) => {
  var minutes = Math.floor(milliseconds / 60000);
  milliseconds = milliseconds % 60000;

  var seconds = Math.floor(milliseconds / 1000);
  milliseconds = Math.floor(milliseconds % 1000);

  return (
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds
  );
};

export const getTracksFromFolder = (folder) => {
  const tracks = [];
  const directoryPath = folder;

  const files = fs.readdirSync(directoryPath);

  files.forEach((file, index) => {
    tracks.push({
      id: index,
      streamUrl: directoryPath + file,
      title: `${index} - ${file.substring(0, file.lastIndexOf("."))}`,
    });
  });

  return tracks;
};

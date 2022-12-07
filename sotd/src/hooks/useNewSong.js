import { useState } from "react";
import songList from '../db/songs.js'

function useNewSong() {
const [currentSong, setCurrentSong] = useState(null);

function newSong() {
    let randNum = Math.floor(Math.random() * songList.length);
    let song = songList[randNum];
    console.log(song)
    setCurrentSong(song);
    }
 return [newSong, currentSong]
}

export default useNewSong;

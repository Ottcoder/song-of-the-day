import Heading from '../heading/Heading';
import './App.css';
// import fetchSongs from '../song/song';
import songList from '../../db/songs.js'
import SongData from '../song/song';
import { useState } from 'react'

function App() {
const [currentSong, setCurrentSong] = useState(null);

function newSong() {
  let randNum = Math.floor(Math.random() * songList.length);
  let song = songList[randNum];
  console.log(song)
  setCurrentSong(song);
  }


  return (
    <div className="App">
      <div className="Title">
        <Heading/>
        <button onClick={()=>{newSong()}}>New Song</button>
        <SongData currentSong={currentSong}/>
      </div>
    </div>
  );
}

export default App;

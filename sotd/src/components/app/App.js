import Heading from '../heading/Heading';
import './App.css';
import SongData from '../song/song';
import useNewSong from '../../hooks/useNewSong';

function App() {
const [newSong, currentSong] = useNewSong()

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

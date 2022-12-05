import React from 'react'

function SongData ({currentSong}) {
   if (currentSong !== null) {return (
        <div>
            <p className='song-title'>Song: {currentSong.song}</p>
            <p className='artist'>Artist: {currentSong.artist}</p>
        </div>
    )
   }
}

export default SongData

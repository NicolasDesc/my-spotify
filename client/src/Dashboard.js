import React, { useState, useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import axios from 'axios';

import TrackSearchResult from './TrackSearchResult';
import Player from './Player';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

export default function Dashboard() {
  // const [search, setSearch] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
  // const [playingTrack, setPlayingTrack] = useState();
  // const [lyrics, setLyrics] = useState('');

  // function chooseTrack(track) {
  //   setPlayingTrack(track);
  //   setSearch('');
  //   setLyrics('');
  // }

  // useEffect(() => {
  //   if (!search) return setSearchResults([]);

  //   let cancel = false;
  //   spotifyApi.searchTracks(search).then(res => {
  //     if (cancel) return;
  //     setSearchResults(
  //       res.body.tracks.items.map(track => {
  //         const smallestAlbumImage = track.album.images.reduce((smallest, image) => {
  //           if (image.height < smallest.height) return image;
  //           return smallest;
  //         }, track.album.images[0]);

  //         return {
  //           artist: track.artists[0].name,
  //           title: track.name,
  //           uri: track.uri,
  //           albumUrl: smallestAlbumImage.url
  //         }
  //       })
  //     );
  //   })

  //   return () => cancel = true;

  // }, [search]);

  // useEffect(() => {
  //   if (!playingTrack) return;

  //   axios.get('http://localhost:3001/lyrics', {
  //     params: {
  //       track: playingTrack.title,
  //       artist: playingTrack.artist
  //     }
  //   }).then(res => {
  //     setLyrics(res.data.lyrics)
  //   })
  // }, [playingTrack])

  return (
    <div className="dashboard d-flex flex-column" style={{ height: "100vh" }}>
      <div className="dashboard-body d-flex flex-grow-1">
        <Sidebar />
        <Body />
      </div>
      <div className="dashboard-footer">
        <Footer /> 
      </div>
      {/* <Form.Control type="search" placeholder="Search Songs/Artists" value={search} onChange={e => setSearch(e.target.value)} />
      <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
        {searchResults.map(track => (
          <TrackSearchResult
            track={track}
            key={track.url}
            chooseTrack={chooseTrack}
          />
        ))}
        {searchResults.length === 0 && playingTrack && (
          <div className="text-center" style={{ whiteSpace: "pre" }}>
            {lyrics}
          </div>
        )}
      </div>
      <Player accessToken={accessToken} trackUri={playingTrack?.uri} /> 
      </div> */}
    </div >
  )
}

import React from 'react';
import { HouseDoor, Search, MusicNoteList  } from 'react-bootstrap-icons';
import { ReactComponent as SpotifyLogo } from './svg/Spotify-White-Logo.wine.svg';

import { useStateValue } from "./StateProvider";
import SidebarOption from "./SidebarOption";

import './Sidebar.scss';

export default function Sidebar() {
  const [{ playlists }] = useStateValue();

  return (
    <div className="sidebar d-flex flex-column px-2">
      <SpotifyLogo width={170} height={85} className="mb-3 spotify-icon" />
      <SidebarOption Icon={HouseDoor} option="Home" />
      <SidebarOption Icon={Search} option="Search" />
      <SidebarOption Icon={MusicNoteList} option="Your Library" />

      <p className="fw-bolder ms-3 mb-1 mt-2">PLAYLISTS</p>

      <span className="border border-dark my-2 mx-auto"></span>

      {playlists?.map((playlist) => (
        <SidebarOption option={playlist.name} key={playlist.uri} />
      ))}
    </div>
  )
}

import React from 'react';
import { Container } from 'react-bootstrap';

import { ReactComponent as SpotifyLogo } from './svg/Spotify-White-Logo.wine.svg';
import './Login.scss';

const scopes = 'streaming user-read-email user-read-private user-library-read user-library-modify  user-read-playback-state user-modify-playback-state';
const AUTH_URL = 'https://accounts.spotify.com/authorize' +
  '?response_type=code' +
  '&client_id=' + process.env.REACT_APP_CLIENT_ID +
  '&redirect_uri=' + encodeURIComponent(process.env.REACT_APP_REDIRECT_URI) +
  '&scope=' + encodeURIComponent(scopes);

export default function Login() {
  return <Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
    <SpotifyLogo width={500} height={300}/>
    <a className="btn btn-login btn-lg" href={AUTH_URL}>
      Login With Spotify
    </a>
  </Container>
}
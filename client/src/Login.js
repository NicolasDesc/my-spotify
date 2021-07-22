import React from 'react';

import { Container } from 'react-bootstrap';

const scopes = 'streaming user-read-email user-read-private user-library-read user-library-modify  user-read-playback-state user-modify-playback-state';
const AUTH_URL = 'https://accounts.spotify.com/authorize' +
  '?response_type=code' +
  '&client_id=' + process.env.REACT_APP_CLIENT_ID +
  '&redirect_uri=' + encodeURIComponent(process.env.REACT_APP_REDIRECT_URI) +
  '&scope=' + encodeURIComponent(scopes);

export default function Login() {
  return <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
    <a className="btn btn-success btn-lg" href={AUTH_URL}>
      Login With Spotify
    </a>
  </Container>
}
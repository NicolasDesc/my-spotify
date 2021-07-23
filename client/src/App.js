import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useStateValue } from "./StateProvider";
import Dashboard from './Dashboard';
import useAuth from './useAuth';
import Login from './Login';

import './App.scss';

const code = new URLSearchParams(window.location.search).get('code');
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_CLIENT_ID
})

function App() {
  const _accessToken = useAuth(code);
  const [{ access_token }, dispatch] = useStateValue();

  useEffect(() => {
    if (!_accessToken) return;

    spotifyApi.setAccessToken(_accessToken);

    dispatch({
      type: "SET_ACCESS_TOKEN",
      access_token: _accessToken,
    });

    spotifyApi.getMe().then((data) => {
      dispatch({
        type: "SET_USER",
        user: data.body,
      });
    });

  }, [_accessToken, dispatch]);

  return <div className="my-spotify-app">
    {access_token ? <Dashboard spotifyApi={spotifyApi} /> : <Login />}
  </div>
}

export default App;

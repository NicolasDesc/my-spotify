import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './Dashboard';
import Login from './Login';
import './App.scss';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return <div className="my-spotify-app">
    {code ? <Dashboard code={code} /> : <Login />}
  </div>
}

export default App;

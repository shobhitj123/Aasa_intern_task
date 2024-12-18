import React from 'react';
import Login from './components/Login';
import Weather from './components/Weather';
import Report from './components/Report';

function App() {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <Login />
      <Weather />
      <Report />
    </div>
  );
}

export default App;

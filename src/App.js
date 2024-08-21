import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    const response = await fetch('/api/hello');
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My App</h1>
        <button onClick={fetchMessage}>Fetch Message</button>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;

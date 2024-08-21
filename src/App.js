import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    fetch('/api/hello')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // This will now correctly parse the JSON response
    })
    .then(data => {
      setMessage(data.message); // Should log: "Hello from Azure Functions!"
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
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

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/hello/')
      
    .then((response) => {
        setMessage(response.data.message); 
      })
      .catch((error) => {
        console.error('Erro ao buscar a mensagem:', error);
      });
  }, []);

  return (
    <div>
      <h1>{message}</h1> {
        
      }
    </div>
  );
}

export default App;

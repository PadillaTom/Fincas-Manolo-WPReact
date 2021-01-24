import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [myPages, setMyPages] = useState([]);
  useEffect(() => {
    axios.get('http://www.fincas-manolo.cf/wp-json').then((response) => {
      console.log(response);
    });
  }, []);
  return (
    <div className='App'>
      <h1>Fincas Manolo</h1>
    </div>
  );
}

export default App;

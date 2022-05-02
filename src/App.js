import React from 'react';
import LoadNameInput from './components/name'
import LoadCountries from './components/countries'
import './styles/styles.css';

function App() {
  return (
    <main>
      <LoadNameInput/>

      <LoadCountries/>
    </main>
  );
}

export default App;

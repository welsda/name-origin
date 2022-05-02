import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import namesApi from '../services/namesApi';

export default function LoadNameInput() {
  const [input, setInput] = useState('');
  const [name, setName] = useState({});

  async function searchName(){
    if(input === ""){
      document.getElementById('error').innerHTML = 'Type some name!'
      setName("")
      setInput("")
      return;
    }

    else if(input.split(" ").length - 1 >= 1){
      document.getElementById('error').innerHTML = 'Type an only name!'
      setName("")
      setInput("")
      return;
    }

    else{
      const responseName = await namesApi.get(`?name=${input}`);
      document.getElementById('error').innerHTML = ''
      setName(responseName.data)
      setInput("");

      if(responseName.data.country.length < 1){
        document.getElementById('error').innerHTML = 'There are no results for the typed name!'
        setName("")
        setInput("")
        return;
      }
    }
  }

  return (
    <div className='container'>
      <h1 className="title">Name Origin</h1>
      
      <div className="containerInput">
        <input 
          type="text" 
          placeholder="Type a name..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="searchButton" onClick={searchName}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <div>
        <p id='error'></p>
      </div>

      {Object.keys(name).length > 0 && (
        <div id='result' className='result'>
          <span>Name:<span className='innerSpan'> {name.name}</span></span>
          {name.country?.map((country) => 
            <div key={country.probability}>
              <span>Code:<span className='innerSpan'> {(country.country_id)}</span></span>
              <span className='probabilitySpan'>Probability:<span className='innerSpan'> {(country.probability * 100).toFixed(0)}%</span></span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
import React, { useState, useEffect } from 'react';

export default function LoadCountries() {
  const [countries, setCountries] = useState([]);
  const [countriesPerPage, setCountriesPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(countries.length / countriesPerPage)
  const startIndex = currentPage * countriesPerPage;
  const endIndex = startIndex + countriesPerPage;
  const currentCountries = countries.slice(startIndex, endIndex)

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://gist.githubusercontent.com/almost/7748738/raw/ef1825a0ed94af095f0a1f58a92d2110916c20fb/countries.json")
        .then(response => response.json())
        .then(data => data)
      
      setTimeout(() => {
        setCountries(result);
      }, 1500)
    }
    fetchData()
  }, []);

  useEffect(() => {
    setCurrentPage(0)
  }, [countriesPerPage])

  return (
    <div className='container'>
      {Object.keys(countries).length > 0 && (
        <div className='countriesContainer'>
          <div>
            <select className='selectCountriesPerPage' value={countriesPerPage} onChange={(e) => setCountriesPerPage(Number(e.target.value))}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>
      
          <div className='pages'>
            {Array.from(Array(pages), (country, index) => {
              return <button key={index} 
                value={index} 
                onClick={(e) => setCurrentPage(Number(e.target.value))} 
                className='pageButton'>
                  {index + 1}
                </button>
            })}
          </div>
      
          <div className='tableHeader'>
            <span>Code</span>
            <span>Country</span>
          </div>
          
          {currentCountries?.map(country => {
            return <div key={country.code} className='country'>
              <span>{country.code}</span>
              <span className='countryNamePosition'>{country.name}</span>
            </div>
          })}
        </div>
      )}

      {Object.keys(countries).length < 1 && (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
  );
}
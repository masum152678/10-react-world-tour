import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = () => {
    const[countries, setCountries] = useState([])
    const[visitedCountries, setVisitedCountries] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=>setCountries(data))
    }, [])

    const handleVisitedCountry = country =>{
        // console.log('Something is here')
        // console.log(country)
        const newVisitedcountry = [...visitedCountries, country]
        setVisitedCountries(newVisitedcountry)
    }

    return (
        <div>
            <h3>Number of Countries: {countries.length}</h3>
            <div>
                 <h3>List of my visited countries: {visitedCountries.length}</h3>
                 <ul>
                 {
                        visitedCountries.map(country2 => <li key={country2.cca3}>{country2.name.common}</li>)
                    }
                 </ul>
            </div>
            <div className='countries-container'>
                    {
                        countries.map(country => <Country 
                            key={country.name.common} 
                            country={country}
                            handleVisitedCountry={handleVisitedCountry}></Country>)
                    }
            </div>
        </div>
    );
};

export default Countries;
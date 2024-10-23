import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry}) => {
    const {name,flags,capital, area, population, cca3} = country
    console.log(country)
    const [visited, setVisited] = useState(false)
    const handleClick = ()=>{
        setVisited(!visited)
    }

   
    return (
        <div className={`box ${visited ? 'visitedCss' : 'box'}`}>
            <h3 style={{color: visited ? 'yellow': 'blue'}}>Name of country: {name?.common}</h3>
            <img src={flags.png} alt="" className='image'/>
            <h4>Capital city: {capital} </h4>
            <h4>Area of country: {area}</h4>
            <h4>Population of {name.common} is {population}</h4>
            <p><small>Code: {cca3}</small></p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark as Visited</button>
            <br/>
            <button onClick={handleClick}> {visited ? 'Visited' : 'Going'}</button>
            { visited ?' I have visited the country':'I am going to visit the country'}
        </div>
    );
};

export default Country;
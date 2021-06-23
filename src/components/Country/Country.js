import React from 'react';
import './country.css';
const Country = ({stats}) => {
    console.log("Country.js  ", stats)
    return(
        <div className='country'>
            <img src={stats.countryInfo.flag} alt={stats.Country}></img>
            <h2>{stats.Country}</h2>
            <div className='describe'>
                <p>{`Active : ${stats.active}`}</p> 
                <p>{`Cases : ${stats.cases}`}</p> 
                <p>{`Deaths : ${stats.deaths}`}</p> 
                <p>{`Recovered : ${stats.recovered}`}</p> 
            </div>
        </div>
    )
}

export default Country;
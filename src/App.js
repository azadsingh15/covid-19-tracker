import React, { useEffect, useState } from 'react'
import './App.css'
import CountryList from './components/CountryList/CountryList';
import SearchBox from './components/SearchBox/SearchBox';

function App() {

    let [country, setCountry] = useState([]);

    useEffect(() => {
        (async function() {
            const resp = await fetch("https://corona.lmao.ninja/v2/countries");
            const countries = await resp.json();
            setCountry(countries);
            countries.forEach(async(country) => {
                const resp = await fetch(`https://corona.lmao.ninja/v2/countries/${country.country}`);
                const cdata = await resp.json();
            })
        })();
    }, [])
    return ( <
        div className = "App" >
        <
        h1 > Covid - 19 Tracker of Different Countries < /h1> <
        h2 > Let 's Stay Home and Fight Covid Together</h2> <
        h3 > ABOUT COVID - 19 < /h3> <
        p > Coronavirus disease(COVID - 19) is an infectious disease caused by a newly discovered coronavirus.

        Most people infected with the COVID - 19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.

        The best way to prevent and slow down transmission is to be well informed about the COVID - 19 virus, the disease it causes and how it spreads.Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face.

        The COVID - 19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’ s important that you also practice respiratory etiquette(
            for example, by coughing into a flexed elbow). < /p> <
        h3 > Symptoms of Covid - 19 < /h3> <
        ul >
        <
        li > Fever < /li> <
        li > Shortness of breath < /li> <
        li > Chills, sometimes with shaking < /li> <
        li > Loss of smell or taste < /li> <
        li > Congestion / runny nose < /li> < /
        ul > <
        h3 > Prevention from Covid - 19 < /h3> <
        ul >
        <
        li > Clean your hands often.Use soap and water, or an alcohol - based hand rub. < /li> <
        li > Maintain a safe distance from anyone who is coughing or sneezing. < /li> <
        li > Wear a mask when physical distancing is not possible. < /li> <
        li > Don’ t touch your eyes, nose or mouth. < /li> <
        li > If you have a fever, cough and difficulty breathing, seek medical attention. < /li> <
        /ul> <
        h2 > List of different countries with details of their covid cases: < /h2> <
        CountryList stats = { country }
        /> < /
        div >
    )
}



export default App
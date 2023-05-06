import React, { useState, useEffect } from 'react'
import './css/style.css'


const Tempapp = () => {
    const [city, setcity] = useState(null)
    const [search, setsearch] = useState('Mumbai')
    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=abd70a4d159058f580a72c97c88798a7`
            const response = await fetch(url)
            console.log(response)
            const reJson = await response.json()
            console.log(reJson)
            setcity(reJson.main)
        }
        fetchApi();
    }, [search])


    let datevar = new Date().toLocaleDateString()
    const [cdate, setcdate] = useState(datevar)
    const update = () =>{
        setcdate(datevar)
    }


    return (
        <>
            <div className='box'>
                <div className="inputData">
                    <label className = 'City' >Enter City</label>
                    <input type="search"
                        className='inputField'
                        onChange={(event) => {
                            setsearch(event.target.value)
                        }}
                    />
                </div>

                {
                    !city ? (
                        <p>No Data Found</p>
                    ) : (
                        <div>
                            <div className="info">
                            <i class="material-icons" id = 'weathericon' style={{ fontSize:'36px', color: 'yellow'}}>wb_sunny</i>
                                <h2 className="location">
                                <i class="material-icons streetview" style={{ fontSize:'36px' }}>streetview</i>{search}
                                </h2>
                                <h3 className="tempmin_max">{cdate}</h3>
                                <h1 className="temp">
                                    {city.temp}°Cel
                                </h1>
                                <h3 className="tempmin_max">
                                    Min : {city.temp_min} °Cel | Max : {city.temp_max} °Cel
                                </h3>
                            </div>

                            <div className="wave -one"> </div>
                            <div className="wave -two"> </div>
                            <div className="wave -three"> </div>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default Tempapp




// API Key -> abd70a4d159058f580a72c97c88798a7

// API Key -> abd70a4d159058f580a72c97c88798a7
// api.openweathermap.org/data/2.5/weather?q={city name}&appid=abd70a4d159058f580a72c97c88798a7

// api.openweathermap.org/data/2.5/weather?q={city name}&appid=abd70a4d159058f580a72c97c88798a7
 
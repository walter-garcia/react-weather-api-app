import React, { Component } from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const api_key = "250102fb638d0a11ebcdf69e573d1361";

class App extends Component {
  getWeather = async (event) => {
    event.preventDefault();
    const api_call = await 
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=Natal,BR&appid=${api_key}&units=metric`)
    ;

    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <>
        <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
        </div>
      </>
    )
  }
}

export default App;
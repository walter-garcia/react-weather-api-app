import React, { Component } from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const api_key = "250102fb638d0a11ebcdf69e573d1361";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (event) => {
    event.preventDefault();

    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;

    const api_call = await 
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}&units=metric`)
    ;

    const data = await api_call.json();
    
    if (city && country) {
      console.log(data);

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please provide City and Country names."
      });
    }
  }
  render() {
    return (
      <>
        <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
        </div>
      </>
    )
  }
}

export default App;
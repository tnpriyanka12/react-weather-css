import React from 'react';
import "./App.css";
import Location from "./Location";
import Weather from "./Weather";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      city: '',
      country: '',
      lat: '',
      lng: '',
      temperature: '',
      description: "",
      image: "",
      textbox: ""
    };
  }


  componentDidMount(){
    this.getWeather("Sydney");


  }

  getWeather = location => {
    const apiKey = "47a74e64a990f2ac2b08e52825c96b0f";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    return fetch(url).then( res => res.json())
    .then(json => {console.log(json)
    this.setState({
      city: json.name,
      country: json.sys.country,
      temperature: json.main.temp,
      lat: json.coord.lat,
      lng: json.coord.lon,
      description: json.weather[0].description,
      image: json.weather[0].main
    })
  });
  }//getWeather

  setCity = (event) => {
    console.log(event);
    console.log('event target', event.target.value );
    // this.state.textbox =  event.target.value
    this.setState({
      textbox: event.target.value,
    })
  }

  handleSubmit = () => {
    this.getWeather(this.state.textbox);
  }

  render(){
    return(
      <div className="weather-app__container">
        <div className="weather-app__searchbar">
        <input className="weather-app__textbox"
          placeholder="Search a city"
          value={this.state.textbox}
          onChange={this.setCity}
          />

        <button className="weather-app__button" onClick={this.handleSubmit}>FIND</button>
        </div>

        <Location
          city={this.state.city}
          country={this.state.country}
          lat={this.state.lat}
          lng={this.state.lng}
          />
          <Weather
            temperature={this.state.temperature}
            image={this.state.image}
            description={this.state.description}
          />
      </div>
    )
  }
}

export default App;

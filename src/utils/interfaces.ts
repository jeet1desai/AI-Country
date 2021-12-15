

export interface CountryName {
	name: string;
} 

interface ICountryName {
  common: string
}

interface IFlag {
  png: string
}

export interface CountryResponse {
  name: ICountryName
  capital: string[]
  population: number
  latlng: number[]
  flags: IFlag
}


interface ILocation {
  name: string
  country: string
}

interface ICurrentWeather {
  weather_icons: string[]
  temperature: number
  wind_speed: number
  precip: number
}

export interface CapitalWeatherInfo {
  location: ILocation
  current: ICurrentWeather
}

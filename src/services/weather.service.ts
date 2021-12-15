import httpClient from './http.service';
import { AxiosResponse } from 'axios'
import { WEATHER_BASE_URL, WEATHER_API_KEY } from '../utils/constants';

import { CapitalWeatherInfo } from '../utils/interfaces';

const weatherHttpClient = httpClient.create({
  baseURL: WEATHER_BASE_URL,
})

const getWeatherByCity = (
  cityName: string
): Promise<AxiosResponse<CapitalWeatherInfo>> =>
  weatherHttpClient.get(
    `/current?access_key=${WEATHER_API_KEY}&query=${cityName}`
  )

const weatherService = {
  getWeatherByCity,
}

export default weatherService
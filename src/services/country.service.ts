import httpClient from './http.service';
import { AxiosResponse } from 'axios'
import { COUNTRY_BASE_URL } from '../utils/constants';

import { CountryResponse } from '../utils/interfaces';


const countryHttpClient = httpClient.create({
  baseURL: COUNTRY_BASE_URL,
});

const getAllListByName = (
	countryName: string
): Promise<AxiosResponse<CountryResponse[]>> =>
  countryHttpClient.get(`/name/${countryName}`)

const countryService = {
  getAllListByName,
}

export default countryService
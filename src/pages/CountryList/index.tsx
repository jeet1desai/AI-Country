import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { AxiosError, AxiosResponse } from "axios";
import { useParams } from "react-router";
import { responseStatus } from "../../utils/enums";
import {
  CountryName,
  CountryResponse,
  CapitalWeatherInfo,
} from "../../utils/interfaces";
import countryService from "../../services/country.service";
import weatherService from "../../services/weather.service";
import WeatherPopup from "../../components/WeatherPopup";
import ErrorPopup from "../../components/ErrorPopup";
import CountryCard from "../../components/CountryCard";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

const CountryList: React.FC = () => {
  const { name } = useParams<CountryName>();
  const [countryList, setCountryList] = useState<CountryResponse[]>([]);

  const [capitalWeather, setCapitalWeather] = useState<CapitalWeatherInfo>(
    {} as CapitalWeatherInfo
  );
  const [isWeatherPopupOpen, setWeatherPopupOpen] = useState<boolean>(false);
  const [isErrorPopupOpen, setErrorPopupOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllCountry();
  }, []);

  const getAllCountry = async () => {
    try {
      const result = await countryService.getAllListByName(name);
      if (result.status === responseStatus.OK) {
        setLoading(false);
        setCountryList([...result.data]);
      }
      console.log(result.data);
    } catch (e: any) {
      console.log(e.response);
    }
  };

  const handleGetCapitalWeatherInfo = (country: CountryResponse) => {
    if (country.capital) {
      weatherService
        .getWeatherByCity(country.capital[0])
        .then((response: AxiosResponse) => {
          if (response.status === responseStatus.OK) {
            setCapitalWeather(response.data);
            setWeatherPopupOpen(true);
          } else {
            setErrorPopupOpen(true);
          }
        });
    } else {
      setErrorPopupOpen(true);
    }
  };

  return (
    <Container>
      {loading && <CircularProgress />}
      {!loading && countryList.length === 0 && (
        <Typography color="textSecondary" gutterBottom variant="h6">
          {`Coundn't find any data with this name: ${name}	`}
        </Typography>
      )}
      <Grid container spacing={2}>
        {countryList.map((country: CountryResponse, index) => {
          return (
            <Grid item key={index} md={4} sm={6}>
              <CountryCard
                country={country}
                openWeatherPopup={() => handleGetCapitalWeatherInfo(country)}
              />
            </Grid>
          );
        })}
      </Grid>
      {isWeatherPopupOpen && (
        <WeatherPopup
          show={isWeatherPopupOpen}
          handleClose={() => setWeatherPopupOpen(false)}
          weatherInfo={capitalWeather}
        />
      )}
      {isErrorPopupOpen && (
        <ErrorPopup
          show={isErrorPopupOpen}
          handleClose={() => setErrorPopupOpen(false)}
        />
      )}
    </Container>
  );
};

export default CountryList;

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { CountryResponse } from "../../utils/interfaces";

interface CountryCardProps {
  country: CountryResponse;
  // openWeatherPopup: React.MouseEventHandler<HTMLButtonElement>,
  openWeatherPopup: () => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  openWeatherPopup,
}) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={country.flags.png}
        alt="Country's Flag"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" data-testid="country-name">
          {country.name.common}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Capital: {country.capital ? country.capital[0] : "No capital"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Population: {country.population}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          LatLag: {`${country.latlng[0]}, ${country.latlng[1]}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={openWeatherPopup} size="small" variant="contained">
          Capital Weather
        </Button>
      </CardActions>
    </Card>
  );
};

export default CountryCard;

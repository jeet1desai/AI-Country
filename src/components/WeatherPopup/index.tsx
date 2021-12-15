import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

import { CapitalWeatherInfo } from '../../utils/interfaces';

interface IWeatherInfoProps {
  show: boolean
  weatherInfo: CapitalWeatherInfo
  handleClose: () => void
}


const WeatherPopup: React.FC<IWeatherInfoProps> = (props) => {
  const { handleClose, weatherInfo, show } = props;

  return (
    <Dialog
    	fullWidth
      open={show}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {`${weatherInfo.location.name}, ${weatherInfo.location.country}`}
      </DialogTitle>
      <DialogContent dividers>
	      {weatherInfo?.current?.weather_icons?.map(
	        (weatherIconUrl: string) => (
	          <img
	            key={weatherIconUrl}
	            src={weatherIconUrl}
	          />
	        )
	      )}
	        <Typography variant="body1" color="textSecondary">
	          Temperature : {`${weatherInfo?.current?.temperature}°`}
	        </Typography>
	        <Typography variant="body1" color="textSecondary">
	          Wind Speed : {weatherInfo?.current?.wind_speed} km/h
	        </Typography>
	        <Typography variant="body1" color="textSecondary">
	          Precipitation : {weatherInfo?.current?.precip} %
	        </Typography>
        </DialogContent>
      <DialogActions>
	      <Button
	        variant="contained"
	        onClick={handleClose}
	        color="primary"
	      >
	        Close
	      </Button>
      </DialogActions>
    </Dialog>
  );
}

export default WeatherPopup;
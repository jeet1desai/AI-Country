import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

interface IErrorProps {
  show: boolean,
  handleClose: () => void
}


const ErrorPopup: React.FC<IErrorProps> = (props) => {
  const { handleClose, show } = props;

  return (
    <Dialog
    	fullWidth
      open={show}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
      	Error Information
      </DialogTitle>
      <DialogContent dividers>
	      <Typography variant="body1" color="textSecondary">
	      	Getting Error, Please try again!!..
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

export default ErrorPopup;
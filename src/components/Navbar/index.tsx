import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Navbar: React.FC = () => {
	return (
		<AppBar position="static">
			<Toolbar variant="dense">
			  <Container>
			    <Typography variant="h6" color="inherit" component="div">
			      Country Weather
			    </Typography>
			  </Container>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar;
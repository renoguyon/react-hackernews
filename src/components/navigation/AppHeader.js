import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

const AppHeader = () => {
  return (
    <AppBar position="static" className="app-bar">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Typography variant="h6">
            <Link to="/">H. News</Link>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppHeader;

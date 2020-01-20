import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import AppHeader from './components/navigation/AppHeader';
import MainRoutes from './MainRoutes';

const MainComponent = () => {
  return (
    <div className="App">
      <CssBaseline />

      <Router>
        <AppHeader />

        <Container maxWidth="md" className="main-container">
          <MainRoutes />
        </Container>
      </Router>
    </div>
  );
}

export default MainComponent;

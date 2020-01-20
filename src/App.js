import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import MainComponent from './MainComponent';

const App = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainComponent />
      </ThemeProvider>
    </Provider>
  );
};

export default App;

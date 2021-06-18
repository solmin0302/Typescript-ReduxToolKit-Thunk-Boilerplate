import React from 'react';
import { Provider } from 'react-redux';
import { EnhancedStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

type AppProps = {
  store: EnhancedStore;
};
export default function App({ store }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

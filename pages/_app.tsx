import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { persistor, store } from '../src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './../src/styles/main.scss'
import CustomBrowserRouter from '../router/CustomBrowserRouter';
import App from 'next/app';

export default class CustomApp extends App<AppProps> {

  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <CustomBrowserRouter asPath={this.props.router.asPath}>
          <PersistGate loading={null} persistor={persistor}>
              <Component {...pageProps} />
          </PersistGate>
        </CustomBrowserRouter>
      </Provider>
    )
  }

}

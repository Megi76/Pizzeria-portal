import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/WaiterContainer';
import Booking from './components/views/Booking/Booking';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {Provider} from 'react-redux';
import store from '../src/redux/store';

const theme = createMuiTheme({
  palette: {
    primary: {main: '#2B4C6F'},
  },
});

function App() {
  return (
    < Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard}/>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Kitchen}/>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login}/>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Tables}/>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Waiter}/>
                <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Booking} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </ Provider>
  );
}

export default App;

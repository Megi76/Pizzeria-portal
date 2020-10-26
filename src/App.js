import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard}/>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Kitchen}/>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login}/>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Tables}/>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Waiter}/>
        </Switch>
      </MainLayout>
    </BrowserRouter>  );
}

export default App;

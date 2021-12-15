import React from 'react';

import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import CountrySearch from './pages/CountrySearch';
import CountryList from './pages/CountryList';

import Navbar from './components/Navbar';

import './assets/css/style.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={CountrySearch}/>
        <Route exact path="/:name" component={CountryList}/>
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

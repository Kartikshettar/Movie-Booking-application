import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from '@material-ui/core';
import Header from  "./common/Header/header"; 
import SimpleBottomNavigation from "./common/MainNav";
import Movies from "./Screens/Movies/Movies";
import Series from "./Screens/Series/Series";
import Trending from "./Screens/Trending/Trending";
import Search from "./Screens/Search/Search";

//display the components movie page tv series page, trending movie page ,search bar page and also header and footer
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
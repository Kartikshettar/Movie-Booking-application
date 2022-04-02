import { Container } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from  "./common/Header/header"; // eslint-disable-line no-unused-vars
import SimpleBottomNavigation from "./common/MainNav";

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <div className="App">
      <Container>

      </Container>
    </div>
  
    <SimpleBottomNavigation></SimpleBottomNavigation>
    </BrowserRouter>
  );
};

export default App;

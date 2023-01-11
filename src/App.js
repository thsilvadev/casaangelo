import "./App.css";

import { BrowserRouter } from "react-router-dom";
import AppRoutes from './routes/index';

import Header from './components/Header';

import Container from './components/Container';

import Footer from './components/Footer';

//FONTES

import "./fonts/Antario-Bold.otf";
import "./fonts/Antario-Regular.otf";
import "./fonts/Catavalo-Bold.ttf";
import "./fonts/Catavalo-Light.ttf";
import "./fonts/Catavalo-Regular.ttf";



function App () {
  return (

    <BrowserRouter>
      <Header />
      <Container customClass="min-height">
        <AppRoutes/>
      </Container>
      <Footer />
    </BrowserRouter>  

 
  );
}

export default App;

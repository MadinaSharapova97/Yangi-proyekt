import React from 'react';
import GlobalStyle from "./assets/style/global";
import 'bootstrap/dist/css/bootstrap.css'

//corousel style
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// router
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import Register from './pages/register/Register';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import Table from './pages/testlar/table/Table';
import Questions from './pages/testlar/questions/Questions';
import TestStart from './pages/testlar/testStart/TestStart';
import NewsPages from './pages/news/newsPages/NewsPages';


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      {/* <Navbar /> */}
      {/* <TestStart/> */}
      {/* <Table /> */}
      {/* <NewsPages/> */}
      {/* <Questions/> */}
      {/* <Footer /> */}
      <Router/>
      {/* <Register/> */}
    </BrowserRouter>

  );
}

export default App;

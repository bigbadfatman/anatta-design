import React from 'react';
import './App.css';
import Footer from 'components/footer';
import Header from 'components/header';
import ProductPage from 'pages/product';
import { BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <ProductPage/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

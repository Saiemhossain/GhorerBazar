/* eslint-disable react/jsx-no-undef */

import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Product from './pages/Product';
import SingleProduct from './components/product/SingleProduct';
import Context from './context/Context';
import Footer from './pages/Footer';
import CheckOut from './pages/CheckOut';
import ThankYou from './pages/ThankYou';


function App() {
  

  return (
    <>
      <Context>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route  path='/thankYou' element={<ThankYou/>} />
        </Routes>
        <Footer />
      </Context>
    </>
  );
}

export default App

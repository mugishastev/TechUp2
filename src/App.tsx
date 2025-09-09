import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarPage from './components/Navbar'
import FooterSide from './components/Footer';
import FAQ from './components/FAQ';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import LayoutHandling from './LayoutFolder/Layout';
import CartPage from './components/CartPage';
import KapeeStore from './components/home';

function App() {
  return (
    <BrowserRouter>
      {/* <NavbarPage /> */}
      
      <Routes>
        <Route path="/" element={<LayoutHandling />}>
          <Route index element={<KapeeStore />} />
        
        <Route path="/navbar" element={<NavbarPage />} />
        <Route path="Home" element={<KapeeStore />} />
        <Route path="FAQ" element={<FAQ />} />
        <Route path="Blogs" element={<Blogs />} />
         <Route path="/Cart" element={< CartPage cartItems={[]} onUpdateQuantity={function (id: number, quantity: number): void {
            throw new Error('Function not implemented.');
          } } onRemoveItem={function (id: number): void {
            throw new Error('Function not implemented.');
          } }/>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/footer" element={<FooterSide />} />
        </Route>
      </Routes>
      
      {/* <FooterSide /> */}
    </BrowserRouter>
  );
}

export default App;
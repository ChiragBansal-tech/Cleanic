import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ServiceList from './Components/Services/serviceList';
import AboutPage from './Components/About/About';
import LoginForm from './Login/Login/login';
import Plans from './Components/Plans/Plans';
import Home from './Components/Home/Home';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServiceList />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Plans" element={<Plans />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
}

export default App;

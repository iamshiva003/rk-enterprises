import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesServices from './components/FeaturesServices';
import ProductsTestimonials from './components/ProductsTestimonials';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import ContactUs from './components/ContactUs';

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <FeaturesServices />
                        <ProductsTestimonials />
                    </>
                } />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
            <Footer />
            <FloatingContact />
        </div>
    );
}

export default App;

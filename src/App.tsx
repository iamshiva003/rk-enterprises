import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageSection from './components/ImageSection';
import FeaturesServices from './components/FeaturesServices';
import ProductsTestimonials from './components/ProductsTestimonials';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Hero />
            <ImageSection />
            <FeaturesServices />
            <ProductsTestimonials />
            <Footer />
            <FloatingContact />
        </div>
    );
}

export default App;

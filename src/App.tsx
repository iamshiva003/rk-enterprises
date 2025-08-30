import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageSection from './components/ImageSection';
import FloatingContact from './components/FloatingContact';

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Hero />
            <ImageSection />
            <FloatingContact />
        </div>
    );
}

export default App;

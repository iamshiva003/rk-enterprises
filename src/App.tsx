import './App.css';
import FloatingContact from './components/FloatingContact';

function App() {
    return (
        <div className="app-wrapper">
            {/* Header Navigation */}
            <header className="header">
                <div className="header-content">
                    <div className="logo">RKE LOGO</div>
                    <nav className="navigation">
                        <a href="#home" className="nav-link">Home</a>
                        <a href="#services" className="nav-link">Services</a>
                        <a href="#products" className="nav-link">Products</a>
                        <a href="#categories" className="nav-link">Categories</a>
                    </nav>
                    <button className="contact-btn">Contact us</button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-headline">
                        Your Source for Advanced<br />
                        Water Purification Filter
                    </h1>
                    <p className="hero-tagline">
                        Trusted by millions. The best water purifiers which never compromises on your water quality.
                    </p>
                </div>
            </section>

            {/* Image Section */}
            <section className="image-section">
                <div className="image-container">
                    <div className="image-wrapper left-image">
                        <img 
                            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                            alt="Clear glass with ice cubes and water splash"
                            className="water-image"
                        />
                    </div>
                    <div className="image-wrapper middle-image">
                        <img 
                            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                            alt="Hands cupped with water splash"
                            className="water-image"
                        />
                    </div>
                    <div className="image-wrapper right-image">
                        <img 
                            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                            alt="Water pouring into cupped hands"
                            className="water-image"
                        />
                    </div>
                </div>
            </section>

            <FloatingContact />
        </div>
    );
}

export default App;

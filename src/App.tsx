import './App.css';
import logo from './assets/logo/logo.png';
import FloatingContact from './components/FloatingContact';

function App() {
    return (
        <div className="app-wrapper">
            <img src={logo} alt="RK Enterprises logo" className="logo" />
            <h1 className="title">RK Enterprises</h1>
            <FloatingContact />
        </div>
    );
}

export default App;

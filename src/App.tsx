import logo from './assets/logo/logo.png'
import './App.css'
import WhatsApp from "./services/WhatsApp.tsx";

function App() {

  return (
      <>
        <div className="App">
          <img src={logo} alt="RK Enterprises logo"/>
          <h1>RK ENTERPRISES</h1>
        </div>

        <WhatsApp />
      </>
  )
}


export default App

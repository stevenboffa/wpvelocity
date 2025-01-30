import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
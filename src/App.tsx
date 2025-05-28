import { useRef } from "react";
import "./App.css";
import NavBarComponent from "./components/navBarComponent/NavBarComponent";
import { BrowserRouter } from "react-router-dom";
import FooterComponent from "./components/footerComponent/FooterComponent";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const portalContainerRef = useRef<HTMLDivElement>(null);
  return (
    <BrowserRouter>
      <NavBarComponent portalContainerRef={portalContainerRef} />
      <div ref={portalContainerRef} />
      <AppRoutes />
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;

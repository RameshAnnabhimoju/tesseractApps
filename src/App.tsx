import { useRef, useState } from "react";
import "./App.css";
import NavBarComponent from "./components/navBarComponent/NavBarComponent";
import { BrowserRouter } from "react-router-dom";
import FooterComponent from "./components/footerComponent/FooterComponent";
import AppRoutes from "./routes/AppRoutes";
import Signup from "./pages/signup/Signup";

function App() {
  const [dialog, setDialog] = useState(false);
  const handleDialog = (value?: boolean) => {
    if (value != undefined) {
      setDialog(value);
    } else {
      setDialog(!dialog);
    }
  };
  const portalContainerRef = useRef<HTMLDivElement>(null);
  return (
    <BrowserRouter>
      <Signup
        dialog={dialog}
        setDialog={setDialog}
        handleDialog={handleDialog}
      />
      <NavBarComponent
        portalContainerRef={portalContainerRef}
        handleDialog={handleDialog}
      />

      <div ref={portalContainerRef} />
      <AppRoutes handleDialog={handleDialog} />
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;

import { useRef, useState } from "react";
import "./App.css";
import NavBarComponent from "./components/navBarComponent/NavBarComponent";
import { BrowserRouter } from "react-router-dom";
import FooterComponent from "./components/footerComponent/FooterComponent";
import AppRoutes from "./routes/AppRoutes";
import Signup from "./pages/signup/Signup";
import BookADemo from "./pages/bookADemo/BookADemo";
// import SignupFlow from "./pages/signupflow/SignupFlow";

function App() {
  const [dialog, setDialog] = useState(false);
  const [bookADemo, setBookADemo] = useState(false);
  const handleDialog = (value?: boolean) => {
    if (value != undefined) {
      setDialog(value);
    } else {
      setDialog(!dialog);
    }
  };
  const handleBookADemo = (value?: boolean) => {
    if (value != undefined) {
      setBookADemo(value);
    } else {
      setBookADemo(!dialog);
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
      <BookADemo bookADemo={bookADemo} handleBookADemo={handleBookADemo} />
      {!(dialog || bookADemo) && (
        <NavBarComponent
          portalContainerRef={portalContainerRef}
          handleDialog={handleDialog}
          handleBookADemo={handleBookADemo}
        />
      )}

      <div ref={portalContainerRef} />
      {!(dialog || bookADemo) && <AppRoutes handleDialog={handleDialog} />}
      {!(dialog || bookADemo) && <FooterComponent />}
    </BrowserRouter>
  );
}

export default App;

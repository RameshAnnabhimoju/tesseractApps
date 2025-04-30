import { useRef } from "react";
import "./App.css";
import NavBarComponent from "./components/navBarComponent/NavBarComponent";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterComponent from "./components/footerComponent/FooterComponent";
import Blog from "./pages/blog/Blog";
import Article from "./pages/article/Article";
import Details from "./pages/details/Details";
import RequestADemo from "./pages/requestADemo/RequestADemo";

function App() {
  const portalContainerRef = useRef<HTMLDivElement>(null);
  return (
    <BrowserRouter>
      <NavBarComponent portalContainerRef={portalContainerRef} />
      <div ref={portalContainerRef} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/article" element={<Article />} />
        <Route path="/details" element={<Details />} />
        <Route path="/requestDemo" element={<RequestADemo />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;

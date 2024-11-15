import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ScrollToTop from "./Components/NavBar/ScrollToTop";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Dubai from "./Pages/International/Dubai/Dubai";
import Darjeeling from "./Pages/India/Darjeeling/Darjeeling";
import Paragliding from "./Pages/Activities/Paragliding/Paragliding";
import RiverRafting from "./Pages/Activities/RiverRafting/RiverRafting";
import Hiking from "./Pages/Activities/Hiking/Hiking";
import Termpage from "./Components/Footer/FooterLink/Termpage";
import DocumentVisa from "./Components/Footer/FooterLink/DocumentVisa";
import PrivacyPolicy from "./Components/Footer/FooterLink/PrivacyPolicy";
import Footer from "./Components/Footer/Footer";
import Kashmir from "./Pages/India/Kashmir/Kashmir";
import Ladakh from "./Pages/India/Ladakh/Ladakh";
import Maldives from "./Pages/International/Maldives/Maldives";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/international/dubai" element={<Dubai />} />
          <Route path="/international/maldives" element={<Maldives />} />
          <Route path="/india/darjeeling" element={<Darjeeling />} />
          <Route path="/india/kashmir" element={<Kashmir />} />
          <Route path="/india/ladakh" element={<Ladakh />} />
          <Route path="/activities/paragliding" element={<Paragliding />} />
          <Route path="/activities/RiverRafting" element={<RiverRafting />} />
          <Route path="/activities/Hiking" element={<Hiking />} />
          <Route path="/Termpage" element={<Termpage />} />
          <Route path="/DocumentVisa" element={<DocumentVisa />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

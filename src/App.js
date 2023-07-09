import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GuestBook from "./pages/GuestBook";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Askme from "./pages/Askme";

function App() {
  return (
    <>
      <Router>
        <div className={"w-full px-72 pt-12"}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guestbook" element={<GuestBook />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/about" element={<About />} />
            <Route path="/askme" element={<Askme />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

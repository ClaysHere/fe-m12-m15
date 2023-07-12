import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GuestBook from "./pages/GuestBook";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Askme from "./pages/Askme";
import Account from "./pages/Account";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {
  return (
    <>
      <Router>
        <div className={"w-full lg:px-72 pt-12"}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guestbook" element={<GuestBook />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/about" element={<About />} />
            <Route path="/askme" element={<Askme />} />
            <Route path="/account" element={<Account />}>
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

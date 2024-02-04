import Navbar from "./Components/Navbar/Navbar.jsx";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Profile from "./Components/Profile/Profile.jsx";

function App() {
  return (
    <>
      <Box w="100vw" h="auto">
        <Navbar />
        <Box w="100vw">
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/doctors" element={<h1>Doctors</h1>} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Box>

        {window.location.href.includes("profile") ? null : <Footer />}
      </Box>
    </>
  );
}

export default App;

import Navbar from "./Navbar";
import HowToPlay from "./HowToPlay";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";

const LandingLayout = () => {
  return (
    <>
      <Navbar />
      <Home />
      <HowToPlay />
      <About />
      <Footer />
    </>
  );
};

export default LandingLayout;

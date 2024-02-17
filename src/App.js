import "./App.css";
import MultiItemCarousel from "./pages/MultiItemCrousel";

import Feature from "../src/components/Feature/Feature";
import Banner from "./pages/Banner";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Navigation from "./components/Navigation/Navigation";
import Property from "./components/Property/Property";
import MultiItemCrouselSecond from "./pages/MultiItemCrouselSecond";
import MultiItemCrouselThree from "./pages/MultiItemCrouselThree";

import Blog from "./pages/Blog";
import MultiItemCrouselFour from "./pages/MultiItemCrouselFour";
import MultiItemCrouselFifth from "./pages/MultiItemCrouselFifth";

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <Banner />
      <MultiItemCarousel />
      <MultiItemCrouselSecond />
      <MultiItemCrouselFour />
      <MultiItemCrouselThree />
      <MultiItemCrouselThree />
      <MultiItemCrouselFifth />
      <MultiItemCrouselThree />

      <Blog />
      <Property />
      <About />
      <Navigation />
    </div>
  );
}

export default App;

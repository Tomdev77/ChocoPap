import React from "react";
import Navbar from "./components/Navbar";
import "./styles/App.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PagePanier from "./pages/PagePanier";
import PageFicheProduit from "./pages/PageFicheProduit";
import BoutiqueSection from "./pages/BoutiqueSection";




// import Productcarousel from "./components/Productcarousel";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/boutique" component={BoutiqueSection} />
        <Route path="/panier" component={PagePanier} />
        <Route path="/ficheproduit" component={PageFicheProduit} />
      </Switch>
      {/* <Productcarousel /> */}
    
      <Footer />
    </Router>
    </div>
  );
}

export default App;

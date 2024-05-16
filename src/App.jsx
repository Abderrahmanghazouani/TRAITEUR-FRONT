// eslint-disable-next-line no-unused-vars
import React from "react";
// import Navbar from "./Navbar/Navbar";
// import Accueil from "./components/Accueil/Accueil";
// import AboutUs from "./components/AboutUs/AboutUs";
import AOS from "aos";
import "aos/dist/aos.css";
// import Footer from "./components/Footer/Footer";
// import Anonce from "./components/Annonce/Annonce";
// import Contact from "./components/Contact/Contact";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";
// <<<<<<< HEAD
// import Login from "./Admin/Login.jsx";
// import DemandeAnnonce from "./Admin/DemandeAnnonce.jsx";
// import AddAnnoce from "./Admin/AddAnnoce.jsx"
// =======

// >>>>>>> ec36581b120757632a172c7984e588f49749814e




const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return( 
      <>
      <RouterProvider router={router} />    
    </>
  );

};

export default App;
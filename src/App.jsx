import React from "react";
import AOS from "aos";
import DemandeAnnonce from "./Admin/DemandeAnnonce.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";



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


  return (
    <>
      <RouterProvider router={router} />
      <DemandeAnnonce/>  
    </>
  );
};

export default App;

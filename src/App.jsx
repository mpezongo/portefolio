import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import SimplePortefolio from "./page/simplePortefolio";
import Portefolio from "./page/portefolio";

function App() {
  const path = createBrowserRouter([
    {
      path:'/',
      element:<Portefolio />
    },
    {
      path:'/hack',
      element:<Home />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router = {path} />
    </div>
  );
}

export default App;

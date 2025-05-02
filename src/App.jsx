import React, {useEffect} from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./page/Home";
// import SimplePortefolio from "./page/simplePortefolio";
import Portefolio from "./page/portefolio";
import Blog from "./page/blog";
import BlogChildren from "./page/blogChildren";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://pnnrxnhjwbmukrujawov.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBubnJ4bmhqd2JtdWtydWphd292Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxMDc0NzYsImV4cCI6MjA2MTY4MzQ3Nn0.oPpduvPQAopXd3J2mFbeqwa4O8WFqV4gPNZgn6G0nUA"
);


function App() {

  useEffect(() => {
    const setView = async() => {
      const view = localStorage.getItem('view')
      if (!view){
        try{
          const { error } = await supabase
            .from('views')
            .insert([
              { view: 1 }
            ])
          if (error) {
            console.error("Error inserting view:", error);
          } else {
            localStorage.setItem('view', '1')
          }
        }catch (error) {
          console.error("Error setting view:", error);
        }
      }
    }

    setView()
  }, [])

  const path = createBrowserRouter([
    {
      path:'/',
      element:<Portefolio />
    },
    {
      path:'/blogChildren',
      element:<BlogChildren />
    },
    {
      path:'/blog',
      element:<Blog />
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

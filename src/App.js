import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = ()=> {
  const apikey = process.env.ApiKeyName; 
  
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <News apikey={apikey} key="gotonews" pageSize={8} category="" />
            }
          />
          <Route
            path="/general"
            element={
              <News
                apikey={apikey}
                key="general"
                pageSize={8}
                category="general"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                apikey={apikey}
                key="sports"
                pageSize={8}
                category="sports"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                apikey={apikey}
                key="science"
                pageSize={8}
                category="science"
              />
            }
          />
          <Route path="/technology" element={ <News apikey={apikey} key="technology" pageSize={8} category="technology" />}/>
          <Route path="/health"  element={ <News  apikey={apikey} key="health"  pageSize={8} category="health" /> } />
        </Routes>
      </BrowserRouter>
    );
  
}
export default App;
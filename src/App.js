import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  apikey = process.env.ApiKeyName; 
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <News apikey={this.apikey} key="gotonews" pageSize={8} category="" />
            }
          />
          <Route
            path="/general"
            element={
              <News
                apikey={this.apikey}
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
                apikey={this.apikey}
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
                apikey={this.apikey}
                key="science"
                pageSize={8}
                category="science"
              />
            }
          />
          <Route path="/technology" element={ <News apikey={this.apikey} key="technology" pageSize={8} category="technology" />}/>
          <Route path="/health"  element={ <News  apikey={this.apikey} key="health"  pageSize={8} category="health" /> } />
        </Routes>
      </BrowserRouter>
    );
  }
}

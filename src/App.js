import Header from "./components/Header";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
  BrowserRouter,
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Banner />
              <Card />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

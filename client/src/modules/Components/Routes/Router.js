import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
    </BrowserRouter>
  );
}

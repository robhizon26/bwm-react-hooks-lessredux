import React, { useEffect } from "react";
import Header from "./components/shared/Header";
import Routes from "./Routes";

import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, useAuth } from "providers/AuthProvider";
import { MapProvider } from "providers/MapProvider";

import { ToastContainer } from "react-toastify";
import {  configureHookStore } from "./hooks-store";

configureHookStore();

const Providers = ({ children }) => (
    <AuthProvider>
      <MapProvider apiKey={process.env.REACT_APP_TOMTOM_APIKEY}>
        {children}
      </MapProvider>
    </AuthProvider>
);

const BwmApp = () => {
  const authService = useAuth();

  useEffect(() => {
    authService.checkAuthState();
  }, [authService]);

  return (
    <Router>
      <Header logout={authService.signOut} />
      <Routes />
    </Router>
  );
};

const App = () => {
  return (
    <Providers>
      <ToastContainer />
      <BwmApp />
    </Providers>
  );
};

export default App;

 
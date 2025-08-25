import { Switch, Route, Redirect } from "wouter";
import { useState } from "react";

import Home from "./pages/home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import TransactionPage from "./pages/TransactionPage";

import { AboutUs } from "./pages/AboutUs";
import { Services } from "./pages/Services";
import { Features } from "./pages/Features";
import { ContactUs } from "./pages/ContactUs";

import Navigation from "./components/Navigation";
import "./index.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />

        {/* Public routes */}
        <Route path="/login">
          <LoginPage onLogin={setIsLoggedIn} />
        </Route>
        <Route path="/register" component={RegisterPage} />

        {/* Protected routes */}
        <Route path="/dashboard">
          {isLoggedIn ? <DashboardPage /> : <Redirect to="/login" />}
        </Route>
        <Route path="/transactions">
          {isLoggedIn ? <TransactionPage /> : <Redirect to="/login" />}
        </Route>

        {/* Other pages */}
        <Route path="/about" component={AboutUs} />
        <Route path="/services" component={Services} />
        <Route path="/features" component={Features} />
        <Route path="/contact" component={ContactUs} />

        {/* Fallback */}
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
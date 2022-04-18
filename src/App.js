import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SignUp from "./containers/Signup";
import { Homepage } from "./containers/Home";
import Login from "./containers/Login";
import Header from "./layouts/Header";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <Header />
       {<SignUp /> || <Login /> ? <Fragment /> : <Header />} 
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SignUp from "./containers/Signup";
import { Homepage } from "./containers/Home";
import Login from "./containers/Login";
import Header from "./layouts/Header";
import { SearchPage } from "./containers/SearchPage";
import { CourseDetail } from "./containers/CourseDetail";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/courseDetail" element={<CourseDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

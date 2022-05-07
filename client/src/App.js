import "./App.css";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./containers/Signup";
import { Homepage } from "./containers/Home";
import Login from "./containers/Login";
import Header from "./layouts/Header";
import { SearchPage } from "./containers/SearchPage";
import { CourseDetail } from "./containers/CourseDetail";
import { Footer } from "./layouts/Footer";

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
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

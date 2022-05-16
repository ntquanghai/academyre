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
import { ProfilePage } from "./containers/ProfilePage";
import { NotFound } from "./containers/NotFound";

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
          <Route path="profile">
            <Route path="edit-profile" element={<ProfilePage />}/>
            <Route path="courses" element={<ProfilePage />}/>
            <Route path="account" element={<ProfilePage />}/>
          </Route>
          <Route path="*" element = {<NotFound/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

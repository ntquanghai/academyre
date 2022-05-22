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
import { CategoryPage } from "./containers/CategoryPage";

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
          <Route path="/profile/edit-profile" element={<ProfilePage />}/>
          <Route path="/profile/courses" element={<ProfilePage />}/>
          <Route path="/profile/account" element={<ProfilePage />}/>
          <Route path="/category/programming-languages/" element = {<CategoryPage/>}/>
          <Route path="/category/engineering/" element = {<CategoryPage/>}/>
          <Route path="/category/mathematics/" element = {<CategoryPage/>}/>
          <Route path="/category/software-engineering/" element = {<CategoryPage/>}/>
          <Route path="/category/game-development/" element = {<CategoryPage/>}/>
          <Route path="/category/web-development/" element = {<CategoryPage/>}/>
          <Route path="*" element = {<NotFound/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

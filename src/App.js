import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/dialogs/*"
            element={
              <Dialogs
                dialogsData={props.state.messagesPage.dialogsData}
                messagesData={props.state.messagesPage.messagesData}
              />
            }
          />
          <Route
            path="/profile"
            element={<Profile posts={props.state.profilePage.posts} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;

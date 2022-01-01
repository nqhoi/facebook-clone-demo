import "./App.css";
import React from "react";
import Header from "./component/Header/Header";
import Sidebar from "./component/SideBar/Sidebar";
import Feed from "./component/Feed/Feed";
import Widgets from "./component/Widgets/Widgets";
import Login from "./component/Login/Login";

function App() {
  const user= null;

  return (
    // 
    <div className="app">
      {!user ? <Login/> : (
        <>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
        </>
      )}
      
    </div>
  );
}

export default App;

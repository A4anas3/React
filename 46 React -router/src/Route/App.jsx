import { useState } from "react";
import Footer from "../component/Footer";
import Headers from "../component/Header";
import SideBar from "../component/SideBar";
import CreatePost from "../component/CreatePost";
import Post from "../component/Post";
import PostList from "../component/PostList";
import PostListProvider from "../component/post-list-provider";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="content">
            <Headers></Headers>
            <Outlet />
            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;

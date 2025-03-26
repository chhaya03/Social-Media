import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import Sidebar from "./components/Sidebar";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./Store/post-list-store";

function App() {
  //it will manage  what to display on ui with tab
  const [SelectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          SelectedTab={SelectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>

        <div className="content">
          <Header></Header>
          {SelectedTab === "Home" ? ( // if selectedtab is home then displays postLists otherwise create post
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;

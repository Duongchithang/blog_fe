import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layout/header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import CreatePost from "./pages/CreatePost/CreatePost";
import Login from "./pages/Login/Login";
import PostDetail from "./pages/PostDetail/PostDetail";
import Register from "./pages/Register/Register";
function App() {
  return (
    <div className="App">
      <div className="container-fuild">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/create-post" element={<CreatePost />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/post/:id" element={<PostDetail />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

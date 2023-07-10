import Banner from "../../components/Banner/Banner";
import Post from "../../components/Posts/Post";
import Button from "@mui/material/Button";
import "./Home.css";
function Home() {
  return (
    <div className="container">
      <Banner />
      <h1 className="home-title text-center">All Posts</h1>
      <div className="row justify-content-between">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="text-center mt-5">
        <Button
          sx={{
            fontSize: "16px",
            fontFamily: "Chivo Mono",
            fontFamily: "Fira Code",
            fontFamily: "Open Sans",
            fontFamily: "Poppins",
          }}
          className="MuiButton-root"
          variant="contained"
        >
          More articles
        </Button>
         {/* <box-icon color="white" name="right-arrow-alt" animation="tada"></box-icon> */}
      </div>
    </div>
  );
}

export default Home;

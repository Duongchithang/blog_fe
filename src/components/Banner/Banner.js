import Image from "./livechat.png";
import Button from "../Button/Button";
import "./Banner.css";
function Banner() {
    return ( 
        <div className="row">
            <div className="col-12 col-lg-6 container-banner">
                <div className="row">
                    <h1 className="banner-head col-12">
                        Read the most interesting articles
                    </h1>
                     <p className="banner-description col-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                    <div className="container-input col-12 col-lg-10 pl-0">
                        <input placeholder="Search article" className="search-input" type={"text"}/>
                        <div className="btn-search">
                             <Button>Search<box-icon color="white" size="sm" name='search' animation='tada' rotate='270' ></box-icon></Button>
                        </div>
                    </div>
                    <div className="col-12 list-tag">
                      <div className="row align-items-center">
                        <span className="tags col-12 col-lg-3">Popular Tags :</span>
                        <div className="col-lg-9 mt-2">
                               <span className="tag-item col-4 col-lg-2">Design</span>
                        <span className="tag-item col-4 col-lg-3">User Experience</span>
                        <span className="tag-item col-6 col-lg-3">User Interfaces</span>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div className="d-none d-sm-none d-lg-block col-lg-6">
                <img style={{width : "100%",height :"100%", objectFit : "cover"}} src={Image}/>
            </div>
        </div>
     );
}

export default Banner;
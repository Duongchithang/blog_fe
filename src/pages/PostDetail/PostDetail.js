import { useSelector } from "react-redux";

function PostDetail() {
    // const selector = useSelector(state => state.Post.html);
    // console.log(selector);  
    return ( 
        <div>
        <span>this is a span</span>
            {/* <div style={{color : "white"}}   dangerouslySetInnerHTML={{ __html : selector }}></div> */}
        </div>
     );
}

export default PostDetail;
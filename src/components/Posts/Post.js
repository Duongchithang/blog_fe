import "./Post.css";
function Post() {
    return ( 
        <div className="post-container col-12 col-lg-3">
            <div className="post-around">
                <img className="post-image" src="https://images.unsplash.com/photo-1683009427042-e094996f9780?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"/>
            <div className="post-content">
                <h1 className="post-title">Help Finding Information Online</h1>
                <p className="post-description">Majority of peole will work in jobs that don’t exist today.</p>
                <div className="post-info row">
                    <img className="post-avartar col-2" src="https://images.unsplash.com/photo-1683009427042-e094996f9780?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"/>
                    <div className="post-author col-10">
                        <h1 className="post-name">Duong Chi Thang</h1>
                        <span className="post-date">02 May</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
     );
}

export default Post;
import "./CreatePost.css";
import { useEffect, useRef, useState } from "react";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { Button, Input, TextField } from "@mui/material";
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../../service/tool/tool";
import axios from "axios";
import Editor from "../../components/Editor/Editor";
import { MuiFileInput } from "mui-file-input";

function CreatePost() {
  const [file, setFile] = useState(null);
  const [token, setToken] = useState(false);
  const [newValue, setNewValue] = useState(null);
  const [changeColorTitle, setColorTitle] = useState(false);
  const inputRef = useRef(null);

  const handleChange = (newFile) => {
    setFile(newFile);
  };

  return (
    <div className="container">
      {token ? (
        <div>
          <h1 className="createPost-head">Create Post</h1>
          <div className="createPost-info">
            {/* <img
          className="createPost-avartar"
          src="https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        /> */}
            <span className="createPost-name"></span>
          </div>
          <div className="container-text row">
            <div className="col-6">
              <TextField className="col-12" id="outlined-basic" label="Title" variant="outlined" />
            </div>
            <div className="col-6">
              <MuiFileInput className="col-12" value={file} onChange={handleChange} />
            </div>
          </div>
          <div className="container-editor">
            <h1 className="text-description">Description</h1>
            <Editor />
          </div>
        </div>
      ) : <div className="text-allow">Bạn không tạo được bài viết vui lòng đăng nhập !</div>}
    </div>
  );
}

export default CreatePost;

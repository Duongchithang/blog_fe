import React, { useEffect, useRef, useState } from "react";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import EditorJS from "@editorjs/editorjs";
import RawTool from "@editorjs/raw";
import Embed from "@editorjs/embed";
import CodeTool from "@editorjs/code";
import Table from "@editorjs/table";
import NestedList from "@editorjs/nested-list";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";
import AttachesTool from "@editorjs/attaches";
import Delimiter from "@editorjs/delimiter";
import ImageTool from "@editorjs/image";
import LinkTool from "@editorjs/link";
import axios from "axios";
import { URL_BACKEND } from "../../constant";
import edjsParser from "editorjs-html";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { passDataHtml } from "../../store/PostSlice";
import { useNavigate } from "react-router";
import Output from "editorjs-react-renderer";
import "./Editor.css";
const Editor = () => {
  const [dataPost, setDataPost] = useState(null);
  const editorRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const stateHtml = useSelector(state => state.Post.html);
  // const convertToHtml = (content) =>{
  //  const parser = new edjsParser();
  //   const HTML = parser.parse(content);
  //   return HTML;
  // }
  const SubmitData = () => {
    console.log(dataPost);
    // dispatch(passDataHtml(dataPost));
    // setTimeout(()=>{
    //    navigate("/post/5");
    // },2000);
  };
  useEffect(() => {
    const editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        editorRef.current = editor;
      },
      onChange: async () => {
        let content = await editor.saver.save();

        setDataPost(content);
        // let dataText = content.blocks;
        // setDataPost(dataText);
        // let dataContent = MatchHTML(content);
        // console.log(dataContent);
      },
      autofocus: true,
      tools: {
        delimiter: Delimiter,
        header: Header,
        table: Table,
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
        list: {
          class: NestedList,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
        inlineCode: {
          class: InlineCode,
          shortcut: "CMD+SHIFT+M",
        },
        linkTool: LinkTool,

        // image: {
        //   class: ImageTool,
        //   config: {
        //     uploader: {
        //       async uploadByFile(file) {
        //         const formData = new FormData();
        //         formData.append("file", file);
        //         const response = await axios.post(`${URL_BACKEND}/api/UploadImage`, formData, {
        //           headers: {
        //             "Content-Type": "multipart/form-data",
        //           },
        //         });
        //         return response;
        //       },
        //     },
        //   },
        // },
        raw: RawTool,
        code: CodeTool,
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
              coub: true,
            },
          },
        },
      },
    });
    editorRef.current = editor;
  }, []);

  return (
    <div>
      <div id="editorjs"></div>
      <Button
        onClick={SubmitData}
        sx={{ fontWeight: 500, fontSize: `16px`, marginTop: "20px" }}
        variant="contained"
      >
        Create post
      </Button>
    </div>
  );
};

export default Editor;

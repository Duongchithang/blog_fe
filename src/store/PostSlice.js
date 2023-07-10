import { createSlice } from "@reduxjs/toolkit";
const PostSlice = createSlice({
    name : "post",
   initialState : {
    html : "",
    Login : {
      checkLogin : false,
      userName : ""
    },
   },
   reducers : {
      passDataHtml(state, action){
        state.html = action.payload;
      },
      statusLogin(state, action){
         state.Login.checkLogin = action.payload.checkLogin;
         state.Login.userName = action.payload.userName;
      }
   },

});
export default PostSlice.reducer;
export const { passDataHtml, statusLogin } = PostSlice.actions;
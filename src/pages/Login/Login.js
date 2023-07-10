import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import axios from "axios";
import { URL_BACKEND } from "../../constant";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { styled } from "@mui/material/styles";
import { notifySuccess, notifyError } from "../../service/react-toast-notification/Toast";
import { Link, useNavigate } from "react-router-dom";
import { statusLogin } from "../../store/PostSlice";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import "./Login.css";
import { yupResolver } from "@hookform/resolvers/yup";
 
function Login() {
  const navigate = useNavigate();
 const dispatch = useDispatch();

  const schema = yup.object({
    email: yup
      .string()
      .email("email không đúng định dạng")
      .trim("Tài khoản không có khoảng trắng !")
      .required("Không được để trống")
      .min(6, "Tài khoản có độ dài lớn hơn 6"),
    password: yup
      .string()
      .trim("Mật khẩu không có khoảng trắng !")
      .required("Không được để trống")
      .min(6, "Mật khẩu có độ dài lớn hơn 6 !")
  
  });
     const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    
    if(Object.keys(errors).length === 0){
      const loginInfo = {
        email : data.email,
        password : data.password
      }
      const response = await axios.post(`${URL_BACKEND}/api/Login`, loginInfo);
     console.log(response);
      if(response.data.statusCode ===  404){
        notifyError(`${response.data.message}`)
      }
      else if(response.data.statusCode === 200){
        console.log("response ok");
        notifySuccess(`${response.data.message}`);
        let infoUser = JSON.stringify(response.data);
        localStorage.setItem("infoUser",infoUser);
        setTimeout(()=>{
          dispatch(statusLogin({
            checkLogin : true
          }))
          navigate("/")
        },7000)
      }
    }
  
  };

  return (
    <div className="container container-login">
      <div className="row justify-content-center mt-5">
        <div className="col-5 form-login">
          <h1 className="text-center head-form">Login</h1>
          <div className="row">
           <form onSubmit={handleSubmit(onSubmit)}>
             <TextField
              className="col-12 mt-3"
              {...register('email')}
              error={errors.email ? true : false}
              id="outlined-basic"
              label="Email"
              variant="outlined"
               helperText={errors.email ? errors.email.message : null}
            />
            <TextField
              className="col-12 mt-3"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              {... register('password')}
              id="outlined-basic"
              error={errors.password ? true : false}
              label="Password"
              variant="outlined"
               helperText={errors.password ? errors.password.message : null}
            />
            <div className="col-12 p-0">
              <div className="row justify-content-between align-items-center">
                <FormControlLabel
                  className="col-5 check-box"
                  control={<Checkbox />}
                  label="Remember me"
                />
                <Link className="col-5 forgot-password">Forgot my password ?</Link>
              </div>
              <Link to={"/register"}>Do you have an account ?</Link>
            </div>
            {/* disabled={(email === "" && password === "") ? true : false} */}
            <Button type="submit" className="col-12 mt-3 py-2" variant="contained">
              Submit  
            </Button>
           </form>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Login;

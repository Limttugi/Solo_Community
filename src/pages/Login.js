import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import useInput from "../hooks/useInput";
import { LOGIN_REQUEST } from "../reducer/user";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginDone, loginError } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  useEffect(() => {
    if (loginDone) {
      navigate("/");
    }
  }, [loginDone]);

  useEffect(() => {
    if (loginError) {
      alert(loginError);
    }
  }, [loginError]);

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: LOGIN_REQUEST,
        data: {
          email,
          password,
        },
      });
    },
    [email, password]
  );

  return (
    <div className="loginContainer">
      <form className="loginForm" onSubmit={onSubmitForm}>
        <input
          type="email"
          name="userId"
          placeholder="아이디(이메일)을 입력하세요"
          className="input_login"
          value={email}
          onChange={onChangeEmail}
        />
        <input
          type="password"
          name="userPw"
          placeholder="비밀번호를 입력하세요"
          className="input_login"
          value={password}
          onChange={onChangePassword}
        />
        <button type="submit" className="loginBtn" onSubmit={onSubmitForm}>
          로그인
        </button>
      </form>
      <Link to="/signup" className="go_signUp">
        회원가입
      </Link>
    </div>
  );
};

export default Login;

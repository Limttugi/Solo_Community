import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { SIGNUP_REQUEST } from "../reducer/user";
import useInput from "../hooks/useInput";
import "./SignUp.css";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signupDone, signupError } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [nickname, onChangeNickname] = useInput("");

  useEffect(() => {
    if (signupDone) {
      navigate("/login");
    }
  }, [signupDone]);

  useEffect(() => {
    if (signupError) {
      alert(signupError);
    }
  }, [signupError]);

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: SIGNUP_REQUEST,
        data: {
          email,
          password,
          nickname,
        },
      });
    },
    [email, password, nickname]
  );

  return (
    <form className="signUpForm" onSubmit={onSubmitForm}>
      <label>이메일</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChangeEmail}
        className="input_signup"
      />
      <label>비밀번호</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChangePassword}
        className="input_signup"
      />
      <label>닉네임</label>
      <input
        type="nickname"
        name="nickname"
        value={nickname}
        onChange={onChangeNickname}
        className="input_signup"
      />
      <button type="submit" className="signUpBtn" onSubmit={onSubmitForm}>
        가입하기
      </button>
    </form>
  );
};

export default Register;

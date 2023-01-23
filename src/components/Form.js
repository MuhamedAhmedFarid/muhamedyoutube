import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import "./form.css";
import { logo } from "../utils/constants";


function Form() {
  const [isFormShowing, setIsFormShowing] = useState(true);
  const [email, setEamil] = useState();
  const [password, setPassword] = useState();
  const submitHandler = () => {
    if (email && password) {
      setIsFormShowing(!isFormShowing);
    }
  };

  return (
    <div className={!isFormShowing ? "show" : ""}>
      <div className="container ">
        <div className="brand-logo">
          <img src={logo} width="100%" />
        </div>
        <div className="brand-title">YOUTUBE</div>
        <div className="inputs">
          <label className="form__label">EMAIL</label>
          <input
            className="form__input"
            onChange={(e) => setEamil(e.target.value)}
            type="email"
            placeholder="example@test.com"
          />
          <label className="form__label">PASSWORD</label>
          <input
            className="form__input"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Min 6 charaters long"
          />
          <button className="form__btn" type="submit" onClick={submitHandler}>
            LOGIN
          </button>
        </div>
        <a className="form__link" href="https://twitter.com/prathkum">
          MADE BY PRATHAM
        </a>
      </div>
    </div>
  );
}

export default Form;

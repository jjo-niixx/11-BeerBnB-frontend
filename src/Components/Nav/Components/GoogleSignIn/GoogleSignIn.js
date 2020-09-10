import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { FullWideBtn } from "../../Components/ReusableStyle";
import GooglePopUp from "./GooglePopUp";
import { signInAPI } from "../../../../config";
import NavSvg from "../../NavSvg";

export default function GoogleSignIn() {
  const [isGSignUpActive, setIsGSignUpActive] = useState(false);
  const [data, setData] = useState("");

  const responseGoogle = (response) => {
    console.log(response);
  };

  const history = useHistory();

  return (
    <>
      <GoogleLogin
        clientId="790794119407-ddtnahlldo9vk6pjo7oe91vab51u1r31.apps.googleusercontent.com"
        render={(renderProps) => (
          <div onClick={renderProps.onClick} disabled={renderProps.disabled}>
            <FullWideBtn
              borderColor="rgb(118, 118, 118)"
              background="rgb(255, 255, 255)"
              color="rgb(72, 72, 72)"
            >
              {NavSvg.googleLogo}
              구글 계정으로 로그인
            </FullWideBtn>
          </div>
        )}
        buttonText="Login"
        onSuccess={(res) => {
          sessionStorage.setItem("googleToken", res.wc.access_token);
          const googleToken = sessionStorage.getItem("googleToken");
          fetch(`${signInAPI}/user/google`, {
            method: "POST",
            headers: {
              authorization: googleToken,
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((res) => {
              sessionStorage.setItem("access_token", res.access_token);
              sessionStorage.removeItem("googleToken");
              console.log(res);
              if (res.message === "NON_EXISTENT_GOOGLE_USER") {
                alert("등록된 회원이 아닙니다. 회원가입 페이지로 이동합니다.");
                setIsGSignUpActive(true);
                setData(res);
                history.push("/search");
              } else {
                alert("이미 등록된 회원입니다. 메인 페이지로 이동합니다.");
                history.push("/");
              }
            });
        }}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      {isGSignUpActive && <GooglePopUp data={data} />}
    </>
  );
}

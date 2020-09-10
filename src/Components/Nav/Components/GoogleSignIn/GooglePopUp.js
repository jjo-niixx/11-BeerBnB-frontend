import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { InfoSection, InfoInput, FullWideBtn } from "../ReusableStyle";
import {
  SignupInfoBirth,
  BirthSelect,
  UserAgreement,
} from "../SignupModalEmail";
import { signInAPI } from "../../../../config";
import mixin from "../../../../Styles/mixin";
import NavSvg from "../../NavSvg";

export default function GooglePopUp(data) {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const history = useHistory();

  const finishSignUp = () => {
    const nowTime = new Date().getTime();
    const birthTime = new Date(year, month, day).getTime();
    const oneYear = 31556952000;
    const age = Math.floor((nowTime - birthTime) / oneYear);

    if (age >= 18) {
      fetch(`${signInAPI}/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.data.email,
          first_name: data.data.given_name,
          last_name: data.data.family_name,
          password: null,
          year,
          month,
          day,
          platform: "google",
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message === "SUCCESS") {
            alert("회원가입에 성공했습니다.");
            history.push("/");
          } else {
            console.log(res.message);
            alert("다시 한번 확인해주세요.");
          }
        });
    } else {
      alert("18세 이상만 회원가입 할 수 있습니다.");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Header>
          <h1>Complete your information</h1>
          <p>
            Please review and provide any missing information to finish signing
            up.
          </p>
        </Header>
        <InfoSection>
          <div>
            <InfoInput value={data.data.given_name} />
            {NavSvg.person}
          </div>
          <div>
            <InfoInput value={data.data.family_name}></InfoInput>
            {NavSvg.person}
          </div>
          <div>
            <InfoInput value={data.data.email}></InfoInput>
            {NavSvg.emailInput}
          </div>
        </InfoSection>
        <InfoBirth>
          <div>
            <h3>생일</h3>
            <button>{NavSvg.birthAlert}</button>
          </div>
          <BirthSelect onBlur={(e) => setMonth(e.target.value)} width="41.6%">
            <option>월</option>
            {Array(12)
              .fill()
              .map((_, i) => {
                return <option value={i + 1}>{i + 1}월</option>;
              })}
          </BirthSelect>
          <BirthSelect onBlur={(e) => setDay(e.target.value)} width="25%">
            <option>일</option>
            {Array(31)
              .fill()
              .map((_, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
          </BirthSelect>
          <BirthSelect onBlur={(e) => setYear(e.target.value)} width="33.3%">
            <option>년</option>
            {Array(30)
              .fill()
              .map((_, i) => {
                return <option value={i + 1990}>{i + 1990}</option>;
              })}
          </BirthSelect>
        </InfoBirth>
        <ExtraSection>
          <p>This info came from Google</p>
          <p>
            에어비앤비의 마케팅 프로모션, 특별 할인 및 추천 여행 정보, 정책
            변경사항을 이메일로 보내드립니다.
          </p>
          <UserAgreement>
            <input type="checkbox"></input>
            <p>
              에어비앤비에서 보내는 마케팅 메시지를 받고 싶지 않습니다. 계정
              관리 설정 또는 메시지의 링크에서 언제든지 수신을 거부할 수
              있습니다.
            </p>
          </UserAgreement>
        </ExtraSection>
        <div onClick={finishSignUp}>
          <FullWideBtn
            borderColor="#FF5A5F"
            background="#FF5A5F"
            color="rgb(255, 255, 255)"
          >
            Finish Signing Up
          </FullWideBtn>
        </div>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  ${mixin.flexSet}
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColorWhite};
`;

const Wrapper = styled.div`
  width: 33.3%;
  padding: 24px;
  border: ${({ theme }) => theme.borderSet};

  form {
    margin-top: 24px;
  }
`;

const Header = styled.div`
  margin-bottom: 8px;
  font-family: Circular;

  h1 {
    font-size: 24px;
    font-weight: 800;
    line-height: 1.25em;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.37em;
  }
`;

const InfoBirth = styled(SignupInfoBirth)`
  div {
    ${mixin.flexSet("row", "flex-start")}
    margin-bottom: 16px;

    button {
      margin-left: 0.4em;
      margin-bottom: 2px;
    }
  }
`;

const ExtraSection = styled.div`
  p {
    &:nth-of-type(1) {
      text-align: center;
      margin-bottom: 16px;
    }
  }
`;

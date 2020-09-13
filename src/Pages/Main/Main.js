import React from "react";
import styled from "styled-components";

export default function Main() {
  return (
    <SiteContainer>
      <Wrapper>
        <Head>
          <Description>
            <h2>이제, 여행은 가까운 곳에서.</h2>
            <p>
              가까운 곳의 숨겨진 아름다움을 발견하는 색다른 휴가를 즐겨보세요.
            </p>
            <p>가까운 여행지 둘러보기</p>
          </Description>
        </Head>
      </Wrapper>
      <Wrapper>
        <ContentsList>
          {ListDescGroup.map((el, idx) => {
            return (
              <ListBox key={idx} src={el.src}>
                <ItemDesc>
                  <h3>{el.title}</h3>
                  <p>{el.desc}</p>
                </ItemDesc>
              </ListBox>
            );
          })}
        </ContentsList>
      </Wrapper>
    </SiteContainer>
  );
}

const SiteContainer = styled.div`
  max-width: 1280px;
  margin-top: 24px;
  padding: 150px 0;
`;

const Wrapper = styled.div`
  padding-right: 80px;
  padding-left: 80px;
`;

const Head = styled.div`
  position: relative;
  width: 100%;
  min-height: 400px;
  border-radius: 16px;
  background: url("https://a0.muscache.com/im/pictures/d0b48266-c89f-4b30-a7f3-d498a1ee3965.jpg?aki_policy=large");
  background-size: cover;
`;

const Description = styled.div`
  position: absolute;
  max-width: 448px;
  height: 100%;
  padding-bottom: 48px;
  padding-left: 64px;
  padding-top: 48px;

  h2 {
    font-size: 32px;
    font-weight: 700;
    line-height: 36px;
  }

  p {
    margin-top: 8px;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;

    &:nth-of-type(2) {
      font-weight: 700;
    }
  }
`;

const ContentsList = styled.div`
  min-height: 350px;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
`;

const ListBox = styled.div`
  position: relative;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
  background-image: ${({ src }) => `url(${src})`};
  background-position: 50% 50%;
  background-size: cover;
`;

const ItemDesc = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 12px 16px 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background-color: white;

  h3 {
    font-size: 18px;
    line-height: 22px;
    max-height: 44px;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    line-height: 18px;
    max-height: 54px;
    color: rgb(113, 113, 113);
    font-weight: 400;
    margin-top: 4px;
  }
`;

const ListDescGroup = [
  {
    title: "온라인 체험",
    desc: "세계 각지의 호스트가 진행하고 모두 함께 즐기는 독특한 액티비티",
    src:
      "https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",
  },
  {
    title: "독특한 공간",
    desc: "단순한 숙소 이상의 특별함이 담긴 공간에서 쌓을 수 있는 특별한 추억",
    src:
      "https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720",
  },
  {
    title: "집 전체",
    desc:
      "일행만을 위한 편안한 공간에서 친구 및 가족과 오붓한 시간을 보내세요.",
    src:
      "https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720",
  },
];

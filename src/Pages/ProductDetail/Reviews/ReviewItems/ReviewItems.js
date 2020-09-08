import React from "react";
import { useSelector } from "react-redux";
import { AVATAR_URL } from "../../constants";
import styled, { css } from "styled-components";
import mixin from "../../../../Styles/mixin";

function ReviewItems({ modal }) {
  const { reviews, reviewList } = useSelector(
    ({ productDetail, reviewModal }) => ({
      reviews: productDetail.reviews,
      reviewList: reviewModal.reviewList,
    })
  );

  const { list } = reviews;
  const applyReviewList = modal ? reviewList : list?.[0];

  return (
    <Container modal={modal}>
      {applyReviewList?.map((el, idx) => {
        const { user_name, user_profile, created_at, content } = el;
        const originDate = created_at?.split("-");
        const [year, month] = originDate || [];
        return (
          <Review key={idx} modal={modal}>
            <Header>
              <Avatar>
                <img
                  alt="avatar of guest"
                  src={user_profile.length > 0 ? user_profile : AVATAR_URL}
                />
              </Avatar>
              <div>
                <Name>{user_name}</Name>
                <Date>{`${year}년 ${month}월`}</Date>
              </div>
            </Header>
            <div>
              <Description>{content}</Description>
            </div>
          </Review>
        );
      })}
    </Container>
  );
}

export default ReviewItems;

const Container = styled.div`
  ${({ modal }) =>
    modal
      ? ""
      : css`
          ${mixin.flexSet("row", "space-between", "flex-start")}
          flex-wrap: wrap;
        `}
`;

const Review = styled.div`
  width: ${({ modal }) => (modal ? "100%" : "45%")};
  margin-bottom: 30px;
`;

const Header = styled.div`
  ${mixin.flexSet("row", "flex-start")}
  margin-bottom: 20px;
`;

const Avatar = styled.picture`
  width: 56px;
  height: 56px;
  margin-right: 12px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Name = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
`;

const Date = styled.div`
  color: ${({ theme }) => theme.fontColorGray}
  font-size: 14px;
  font-weight: 400;
`;

const Description = styled.div`
  font-weight: ${({ theme }) => theme.fontLight};
`;

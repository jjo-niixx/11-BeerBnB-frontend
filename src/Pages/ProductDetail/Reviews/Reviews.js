import React from "react";
import styled from "styled-components";
import { AVERAGE_TITLE } from "../constants";
import { useReviewModal } from "../hooks/review";
import useReviewData from "../hooks/useReviewData";
import ReviewTitle from "./ReviewTitle/ReviewTitle";
import Average from "./Average/Average";
import ReviewItems from "./ReviewItems/ReviewItems";
import mixin from "../../../Styles/mixin";

function Reviews() {
  const [reviewNum] = useReviewData();
  const [modalStatus, setModalStatus] = useReviewModal();

  return (
    <Container>
      <ReviewTitle />
      <Averages>
        {AVERAGE_TITLE.map((el) => (
          <Average key={el} title={el} />
        ))}
      </Averages>
      <ReviewItems />
      <div>
        <MoreBtn
          onClick={setModalStatus}
        >{`후기 ${reviewNum}개 모두 보기`}</MoreBtn>
      </div>
    </Container>
  );
}

export default Reviews;

// style
const Container = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 48px 0;
  border-bottom: 1px solid #dddddd;
`;

const Averages = styled.div`
  ${mixin.flexSet("row", "space-between")}
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const MoreBtn = styled.button`
  padding: 13px 23px;
  border: 1px solid black;
  border-radius: 12px;
`;

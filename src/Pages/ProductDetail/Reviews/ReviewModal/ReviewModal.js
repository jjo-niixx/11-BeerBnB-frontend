import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AVERAGE_TITLE } from "../../constants";
import { useReviewModal, useReviewList } from "../../hooks/review";
import { REVIEWS_API } from "../../../../config";
import ReviewTitle from "../ReviewTitle/ReviewTitle";
import Average from "../Average/Average";
import ReviewItems from "../ReviewItems/ReviewItems";
import Spinner from "../../ProductDetailComponent/Spinner";
import mixin from "../../../../Styles/mixin";

function ReviewModal() {
  const [loading, setLoading] = useState(false);
  const [modalStatus, setModalStatus] = useReviewModal();
  const [reviewList, _, addReviewList] = useReviewList();
  const { id } = useParams();
  const lastBox = useRef();
  const offset = useRef(0);
  const prevY = useRef(0);
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        const y = firstEntry.boundingClientRect.y;

        if (prevY.current > y) {
          loadMore();
        }

        prevY.current = y;
      },
      { threshold: 1 }
    )
  );

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.style.overflow = "hidden";
    return () => (body.style.overflow = "auto");
  }, []);

  const loadReview = async (offset) => {
    setLoading(true);
    const offsetValue = (offset % 2) * 10; // 현재 백엔드에서 데이터가 20개 이하로만 있어서 인피니티 스크롤 효과를 보여주기 위해서 계속해서 오프셋값을 2안으로만 움직이는 로직
    await fetch(`${REVIEWS_API}${id}?offset=${offsetValue}&limit=10`)
      .then((res) => res.json())
      .then((res) => addReviewList(res));
    setLoading(false);
  };

  const loadMore = () => {
    offset.current++;
    loadReview(offset.current);
  };

  useEffect(() => {
    const currentLastBox = lastBox.current;
    const currentObserver = observer.current;

    if (currentLastBox) {
      currentObserver.observe(currentLastBox);
    }

    return () => {
      if (currentLastBox) {
        currentObserver.unobserve(currentLastBox);
      }
    };
  }, [lastBox]);

  return (
    <Container onClick={setModalStatus}>
      <Modal
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Information>
          <ReviewTitle size="32" />
          <Averages>
            {AVERAGE_TITLE.map((el) => (
              <Average key={el} title={el} modal />
            ))}
          </Averages>
        </Information>
        <Reviews>
          <ReviewItems modal />
          <div ref={lastBox} />
        </Reviews>
      </Modal>
      {loading && <Spinner />}
    </Container>
  );
}

export default ReviewModal;

const Container = styled.section`
  ${mixin.flexSet()}
  position: fixed;
  top: 150px;
  height: calc(100vh - 150px);
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Modal = styled.div`
  position: relative;
  ${mixin.flexSet("row", "space-between", "flex-start")}
  max-width: 1028px;
  max-height: 70%;
  overflow: auto;
  padding: 72px 24px 0 24px;
  background-color: white;
  border: ${({ theme }) => theme.borderSet};
  border-radius: 12px;
  z-index: 100;
`;

const Information = styled.div`
  position: sticky;
  top: 0;
  flex-basis: 30%;
`;

const Averages = styled.div`
  margin-top: 40px;
`;

const Reviews = styled.div`
  flex-basis: 60%;
`;

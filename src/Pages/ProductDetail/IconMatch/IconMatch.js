import Svg from "../SVG/ProductDetailSvg";

const {
  airBnb,
  kitchen,
  hairDryer,
  hanger,
  washer,
  smokeAlarm,
  cableTv,
  parking,
  carbonMonixideAlarm,
  wifi,
  workSpace,
  entireHome,
  key,
  calender,
  enhancedClean,
  superHost,
} = Svg;

const iconMatch = {
  default: airBnb,
  주방: kitchen,
  헤어드라이어: hairDryer,
  옷걸이: hanger,
  세탁기: washer,
  화재경보기: smokeAlarm,
  TV: cableTv,
  "건물 내 무료 주차": parking,
  "일산화탄소 경보기": carbonMonixideAlarm,
  "무선 인터넷": wifi,
  "노트북 작업 공간": workSpace,
  "집 전체": entireHome,
  "순조로운 체크인 과정": key,
  "환불 정책": calender,
  "깨끗하고 깔끔한 숙소": enhancedClean,
  "슈퍼 호스트": superHost,
};

export default iconMatch;

import React from "react";

const ProductListSvg = {
  normalHeart: (
    <svg
      aria-hidden="true"
      role="presentation"
      focusable="false"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "block",
        fill: "transparent",
        height: "24px",
        width: "24px",
        stroke: "rgb(34, 34, 34)",
        strokeWidth: 2,
        overflow: "visible",
      }}
    >
      <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
    </svg>
  ),
  pinkStar: (
    <svg
      viewBox="0 0 1000 1000"
      role="presentation"
      focusable="false"
      aria-hidden="true"
      style={{ height: "14px", width: "14px", fill: "#FF385C" }}
    >
      <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"></path>
    </svg>
  ),
  nextBtn: (
    <svg
      aria-hidden="true"
      role="presentation"
      focusable="false"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "block",
        fill: "none",
        height: "16px",
        width: "16px",
        stroke: "currentcolor",
        strokeWidth: 4,
        overflow: "visible",
      }}
    >
      <g fill="none">
        <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path>
      </g>
    </svg>
  ),
  prevBtn: (
    <svg
      aria-hidden="true"
      role="presentation"
      focusable="false"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "block",
        fill: "none",
        height: "16px",
        width: "16px",
        stroke: "currentcolor",
        strokeWidth: 4,
        overflow: "visible",
      }}
    >
      <g fill="none">
        <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path>
      </g>
    </svg>
  ),
  imgNextBtn: (
    <svg
      viewBox="0 0 16 16"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: "10px",
        width: "10px",
        display: "block",
        fill: "currentcolor",
      }}
    >
      <path d="m5.3 16c .3 0 .6-.1.8-.4l6.8-6.7c.5-.5.5-1.3 0-1.8l-6.8-6.7c-.5-.5-1.2-.5-1.7 0s-.5 1.2 0 1.7l5.8 5.9-5.8 5.9c-.5.5-.5 1.2 0 1.7.2.3.5.4.9.4"></path>
    </svg>
  ),
  imgPrevBtn: (
    <svg
      viewBox="0 0 16 16"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: "10px",
        width: "10px",
        display: "block",
        fill: "currentcolor",
      }}
    >
      <path d="m10.8 16c-.4 0-.7-.1-.9-.4l-6.8-6.7c-.5-.5-.5-1.3 0-1.8l6.8-6.7c.5-.5 1.2-.5 1.7 0s .5 1.2 0 1.7l-5.8 5.9 5.8 5.9c.5.5.5 1.2 0 1.7-.2.3-.5.4-.8.4"></path>
    </svg>
  ),
  checkedImg: (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={{
        display: "block",
        fill: "none",
        height: "12px",
        width: "12px",
        stroke: "currentcolor",
        strokeWidth: 5.33333,
        overflow: "visible",
      }}
    >
      <path fill="none" d="m4 16.5 8 8 16-16"></path>
    </svg>
  ),
  whiteCheckedImg: (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={{
        display: "block",
        fill: "none",
        height: "16px",
        width: "16px",
        stroke: "currentcolor",
        strokeWidth: 4,
        overflow: "visible",
      }}
    >
      <path fill="none" d="m4 16.5 8 8 16-16"></path>
    </svg>
  ),
  closeBtn: (
    <svg
      viewBox="0 0 12 12"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: "14px",
        width: "14px",
        display: "block",
        fill: "currentcolor",
      }}
    >
      <path
        d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z"
        fill-rule="evenodd"
      ></path>
    </svg>
  ),
  mapImg: (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={{
        display: "block",
        fill: "none",
        height: "16px",
        width: "16px",
        stroke: "currentcolor",
        strokeWidth: 2,
        overflow: "visible",
      }}
    >
      <g fill="none">
        <path d="m2.78306954 4.82598455 8.21693046-1.82598455 10 2 7.7830695-1.72957101c.5391333-.11980738 1.0733102.22012338 1.1931176.7592566.0158277.0712249.0238129.14396811.0238129.21693046v21.95121235c0 .4686986-.325532.874512-.7830695.9761871l-8.2169305 1.8259845-10-2-7.78306954 1.729571c-.53913323.1198074-1.07331014-.2201234-1.19311752-.7592566-.01582776-.0712249-.02381294-.1439681-.02381294-.2169305v-21.95121229c0-.46869865.32553199-.87451205.78306954-.97618706z"></path>
        <path d="m9 17h24z" transform="matrix(0 1 -1 0 38 -4)"></path>
        <path d="m-1 15h24z" transform="matrix(0 1 -1 0 26 4)"></path>
      </g>
    </svg>
  ),
};
export default ProductListSvg;

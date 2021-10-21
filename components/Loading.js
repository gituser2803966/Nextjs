import React from "react";

function Loading() {
  return <div className="fixed bg-black text-black top-0 left-0 z-10 w-screen h-screen text-center loading">
    <svg width="205" height="205" viewBox="0 0 40 50">
      <polygon strokeWidth="1" stroke="#fff" fill="none" points="20,1 40,40 1,40">
      </polygon>
      <text fill="#fff" x="5" y="7">Loading</text>
    </svg>
  </div>;
}

export default Loading;

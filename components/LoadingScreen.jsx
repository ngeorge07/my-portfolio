import React from "react";

function LoadingScreen() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        background: "#202023",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div
        className="progress"
        style={{
          backgroundColor: "#f3f3f3",
          justifyContent: "flex-start",
          borderRadius: "100px",
          alignItems: "center",
          position: "relative",
          padding: "0 5px",
          display: "flex",
          height: "40px",
          width: "calc(200px + (500 - 200) * ((100vw - 190px) / (1600 - 190)))",
          margin: "0 auto",
        }}
      >
        <div
          className="progress-value"
          style={{
            boxShadow: "0 10px 40px -10px #26c7bc",
            borderRadius: "100px",
            background: "#26c7bc",
            height: "30px",
            width: 0,
          }}
        ></div>
      </div>
      <p
        style={{
          margin: 0,
          fontFamily: "Open Sans, sans-serif",
          fontWeight: "400",
          color: "#f3f3f3",
        }}
      >
        Loading...
      </p>
    </div>
  );
}

export default LoadingScreen;

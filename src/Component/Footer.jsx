import React from "react";

export default function Footer() {
  let footerStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  };
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <div className="text-center p-4" style={footerStyle}>
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://localhosting.com/">
          MyTodList.com
        </a>
      </div>
    </footer>
  );
}

import React from "react";
import "./style.css";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={"footer"}>
      Made with ❤️ by&nbsp;
      <Link href="" target="_blank">
        Hasan Arslan
      </Link>
    </footer>
  );
};

export default Footer;

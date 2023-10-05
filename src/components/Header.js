import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Header() {
  const [text, setText] = useState("");
  const fullText = "Welcome to our Health Awareness Platform - Health Sahayak";
  const typingSpeed = 50;

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <>
      <div className="header">
        <div className="header-content">
          <h1>{text}</h1>
          <p>
          Unlock Your Full Health Potential: Your Journey to Wellness Begins Here
          </p>
          <p className="chat-head">
            Have a Health related question or need information? Ask us!
          </p>
          <a href="http://localhost:8000" className="bot-button">
            <span>Get Answers from</span>
            <img
              src="../chatbot.png"
              alt=""
              className="chatbot-image"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;

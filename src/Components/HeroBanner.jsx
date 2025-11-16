import React from "react";
import fineaseLogo from "../assets/logo2.png";
import heroBanner from "../assets/heroBanner.mp4";
import styled from "styled-components";
import { MdArrowOutward } from "react-icons/md";

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-4xl text-white md:mx-30 md:py-8 md:mb-10">
      {/* Video Background */}
      <video
        src={heroBanner}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 z-0"
      />

      {/* Overlay (optional, for better text visibility) */}
      <div className="absolute top-0 left-0   z-10 pointer-events-none"></div>

      {/* Top Buttons */}
      <div className="w-full flex justify-between items-center px-10 relative z-20">
        <div className="flex items-center gap-2">
          <StyledWrapper>
            {/* First button: primary style (white -> black on hover) */}
            <button className="button primary-btn rounded-full">
              Ask{" "}
              <span className="icon">
                <MdArrowOutward />
              </span>
            </button>
          </StyledWrapper>
          <StyledWrapper>
            {/* First button: primary style (white -> black on hover) */}
            <button className="button rounded-full">
              More Services{" "}
              <span className="icon">
                <MdArrowOutward />
              </span>
            </button>
          </StyledWrapper>
        </div>
        <StyledWrapper>
          {/* First button: primary style (white -> black on hover) */}
          <button className="button primary-btn rounded-full">
            See Transaction{" "}
            <span className="icon">
              <MdArrowOutward />
            </span>
          </button>
        </StyledWrapper>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center mt-5 mb-15 relative z-20">
        <img src={fineaseLogo} alt="Finease Logo" className="w-48 mb-6" />
        <h1 className="tracking-[0.5em] text-lg md:text-xl font-medium">
          Build Your Own Planning
        </h1>
        <p className="text-gray-300 text-lg mt-3">Plan with Finease</p>
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  /* make the button inline-flex so text + icon stay on same line */
  .button {
    display: inline-flex; /* <- important: inline + flex layout */
    align-items: center; /* vertical center */
    gap: 0.5rem; /* spacing between text and icon */
    padding: 8px 24px;
    border: 1px solid #4f4f4f;
    border-radius: 9999px; /* match rounded-full */
    transition: all 0.25s ease-in;
    position: relative;
    overflow: hidden;
    font-size: 16px;
    cursor: pointer;
    color: black;
    background: transparent;
    z-index: 1;
    line-height: 1; /* avoid extra line-height issues */
  }

  /* ensure icon span doesn't force line break */
  .button .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 0; /* icon sizing more predictable */
  }

  /* bubble elements for the animated button (second button) */
  .button:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: #000000;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  .button:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #000000;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  .button:hover {
    color: #ffffff;
    border: 1px solid #000000;
  }

  .button:hover:before {
    top: -35%;
    background-color: #000000;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  .button:hover:after {
    top: -45%;
    background-color: #000000;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  /* ------------------------------
     Primary button overrides
     ------------------------------ */
  .primary-btn {
    background: #000000;
    color: #ffffff;
    border-color: #000000;
  }

  /* Remove bubble pseudo-elements for primary button */
  .primary-btn:before,
  .primary-btn:after {
    display: none;
  }

  /* Hover state for primary button: black bg, white text */
  .primary-btn:hover {
    background: #ffffff;
    color: #000000 !important;
    border-color: #000000;
  }
`;

export default HeroBanner;

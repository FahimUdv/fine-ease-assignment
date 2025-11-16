import React from "react";
import { FaStar } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import logo from "../assets/logo-white.png";
import firstImg from "../assets/img1.jpg";
import secondImg from "../assets/img2.jpg";
import thirdImg from "../assets/img3.jpg";
import fourthImg from "../assets/img4.jpg";
import fifthImg from "../assets/img5.jpg";
import { PiMathOperationsFill } from "react-icons/pi";
import { AiFillCalendar, AiFillHdd } from "react-icons/ai";
import { CgAlignTop } from "react-icons/cg";
import styled from "styled-components";
import { MdArrowOutward } from "react-icons/md";

const WhyMatters = () => {
  return (
    <div className="pb-5 md:px-28">
      <div className="mx-auto text-center px-4">
        {/* Top Header */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-5 text-gray-800">
          Why Financial Planning Matters?
        </h2>
        <p className="mb-10 text-lg">
          Understanding money management today builds confidence <br></br>and
          freedom for the future.
        </p>

        {/* Top Main Testimonial */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
          {/* Left profile images */}
          <div className="flex -space-x-4">
            <div className="flex">
              <div className="w-20 h-75 bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <img
                  src={firstImg}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-30 h-75 bg-gray-200 rounded-lg ms-4 overflow-hidden shadow-md">
                <img
                  src={secondImg}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Center text */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <p className="text-3xl font-bold mb-3 text-black">25%</p>
            <p className="font-semibold text-gray-400 text-sm mb-4">
              {" "}
              Financial planning helps you take control of your future by
              aligning your income, expenses, and goals. It ensures stability
              during uncertain times, builds confidence in your financial
              decisions, and paves the way for long-term growth and security.
            </p>
            <p className="font-semibold text-gray-800">Giuseppe Marrone</p>
            <p className="text-sm text-gray-500 mb-3">
              People Operations Lead at Worldsensing
            </p>
            <a
              href="#"
              className="text-black font-medium inline-flex items-center gap-1 hover:underline"
            >
              Explore More <BsArrowRight />
            </a>
          </div>

          {/* Right profile images */}
          <div className="flex -space-x-4">
            <div className="flex">
              <div className="w-20 h-75 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <img
                  src={thirdImg}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-20 h-75 bg-gray-200 rounded-lg ms-4 overflow-hidden shadow-md">
                <img
                  src={fourthImg}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-20 h-75 bg-gray-200 rounded-lg ms-4 overflow-hidden shadow-md">
                <img
                  src={fifthImg}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* G2 Leader Section */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 rounded-2xl p-8 shadow-sm gap-6">
          <div className="flex flex-col items-center md:items-start text-left">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="G2 Logo" className="w-20 h-10" />
              <h3 className="font-semibold text-gray-800 text-lg">
                Global Finance Platform Leader
              </h3>
            </div>
            <div className="flex gap-2">
              <div className="px-3 py-1 bg-white rounded shadow text-5xl border text-gray-600">
                <PiMathOperationsFill />
              </div>
              <div className="px-3 py-1 bg-white rounded shadow text-5xl border text-gray-600">
                <AiFillCalendar />
              </div>
              <div className="px-3 py-1 bg-white rounded shadow text-5xl border text-gray-600">
                <AiFillHdd />
              </div>
              <div className="px-3 py-1 bg-white rounded shadow text-5xl border text-gray-600">
                <CgAlignTop />
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="flex flex-col md:flex-row justify-center gap-6 text-left">
            {[
              {
                title: "Personalized Moneytrack Solution",
                text: "Moneytrack makes budgeting effortless. The insights are personalized, easy to understand, and genuinely helpful for staying on top of my finances. Perfect for daily money management!",
              },
              {
                title: "Finally in Control of My Spending!",
                text: "Finease makes tracking my expenses easy. I now know exactly where my money goes and can save smarter. Highly recommended!",
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl shadow-md w-full md:w-80"
              >
                <h4 className="font-semibold text-gray-800 mb-2">
                  {review.title}
                </h4>
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{review.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:pt-10 md:pb-20">
        <StyledWrapper>
          {/* Second button: keeps the animated bubble behavior */}
          <button className="button rounded-full">
            Get in touch{" "}
            <span className="icon">
              <MdArrowOutward />
            </span>
          </button>
        </StyledWrapper>
        </div>
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  /* make the button inline-flex so text + icon stay on same line */
  .button {
    display: inline-flex;        /* <- important: inline + flex layout */
    align-items: center;         /* vertical center */
    gap: 0.5rem;                 /* spacing between text and icon */
    padding: 10px 62px;
    border: 1px solid #4f4f4f;
    border-radius: 9999px;       /* match rounded-full */
    transition: all 0.25s ease-in;
    position: relative;
    overflow: hidden;
    font-size: 16px;
    cursor: pointer;
    color: black;
    background: transparent;
    z-index: 1;
    line-height: 1;              /* avoid extra line-height issues */
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

  }
`;

export default WhyMatters;

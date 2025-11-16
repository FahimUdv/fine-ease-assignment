import React, { useState } from "react";
import budgetingImg from "../assets/budgeting-tips.gif";
import growImg from "../assets/grow.jpg";
import { MdArrowOutward } from "react-icons/md";
import styled from "styled-components";
import { CgCircleci } from "react-icons/cg";

const Tips = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const tips = [
    {
      title: "Set Clear Financial Goals",
      detail:
        "Define what you’re saving for—emergencies, travel, or long-term investments—to stay motivated and consistent.",
    },
    {
      title: "Track Every Expense",
      detail:
        "Record your daily transactions to see where your money goes and identify areas for improvement.",
    },
    {
      title: "Follow the 50/30/20 Rule",
      detail:
        "Spend 50% on needs, 30% on wants, and save 20% for the future. A simple yet powerful framework for balanced budgeting.",
    },
    {
      title: "Review Your Budget Regularly",
      detail:
        "Monitor and adjust your budget monthly based on your actual income and spending trends.",
    },
  ];

  const toggleTip = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f7faff] rounded-3xl shadow-lg md:mx-30 md:mb-20 py-16 px-6 md:px-20 flex flex-col md:flex-row items-start gap-10">
      {/* Left side */}
      <div className="md:w-1/3 flex flex-col justify-center items-start text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Read Budgeting Tips
        </h2>
        <p className="text-gray-600 my-5 leading-relaxed">
          Empower yourself to make smart financial decisions and achieve
          financial freedom step by step.
        </p>
        <img
          src={budgetingImg}
          alt="Budgeting Illustration"
          className="max-w-xs w-full mx-auto md:mx-0"
        />
      </div>

      {/* Right side */}
      <div className="md:w-2/3 space-y-6">
        {/* Top card */}
        <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center">
            <div>
              <img className="w-50 rounded me-5" src={growImg} alt="" />
            </div>
            <div className="ms-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Stay on Top of Your Finances
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A well-planned budget helps you maintain control over your
                spending, reach savings goals faster, and reduce financial
                stress. Take small consistent steps — your future self will
                thank you.
              </p>
            </div>
          </div>
        </div>

        {/* Accordion section */}
        <div className="pt-2 space-y-3">
          {tips.map((tip, index) => (
            <div key={index} className="border-b border-gray-200 pb-3">
              <button
                onClick={() => toggleTip(index)}
                className="w-full text-left font-semibold text-gray-800 flex justify-between items-center hover:font-bold transition-all"
              >
                <span>
                  {index + 1}. {tip.title}
                </span>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <p className="text-gray-600 text-sm mt-2 leading-relaxed animate-fadeIn">
                  {tip.detail}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Button at bottom */}
        <div className="pt-4 flex items-center">
          <StyledWrapper>
            {/* Second button: keeps the animated bubble behavior */}
            <button className="button rounded-full">
              Checkout Reports{" "}
              <span className="icon">
                <MdArrowOutward />
              </span>
            </button>
          </StyledWrapper>
          <button className="btn border-2 border-black rounded-2xl ms-3 text-xl text-white bg-black"><CgCircleci /></button>
        </div>
      </div>
    </section>
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

export default Tips;

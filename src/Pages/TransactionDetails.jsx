import React from "react";
import { CgCircleci } from "react-icons/cg";
import {
  FaHome,
  FaBus,
  FaUtensils,
  FaTshirt,
  FaGift,
  FaMoneyBillWave,
  FaChartLine,
  FaCouch,
  FaQuestion,
  FaClipboardList,
} from "react-icons/fa";

import { FiEye, FiMoreHorizontal } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { useLoaderData } from "react-router";
import styled from "styled-components";

const TransactionDetails = () => {
  const categoryIcons = {
    "House Rent": FaHome,
    "Home Accessories": FaCouch,
    Transport: FaBus,
    Food: FaUtensils,
    Cloth: FaTshirt,
    Gift: FaGift,
    Salary: FaMoneyBillWave,
    Investment: FaChartLine,
    Others: FaClipboardList,
  };

  const data = useLoaderData();
  const transactions = data.result;
  console.log(transactions);

  return (
    <div className="md:mx-28 md:mt-10 md:mb-20 flex flex-col justify-center">
      <h1 className="md:text-5xl font-semibold leading-16 text-center md:mb-10">
        Transaction Details
      </h1>

      <div>
        <div className="w-full md:max-w-5xl mx-auto bg-base-100 p-6 md:p-10 rounded-2xl shadow-sm">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{transactions.title}</h2>
            <h2 className="text-xl font-semibold">
              Amount: {transactions.amount} BDT
            </h2>
          </div>

          {/* Card Box */}
          <div className="bg-base-200 rounded-xl p-5 flex flex-col md:flex-row justify-between gap-4">
            {/* Card visual + name */}
            <div className="flex gap-4 w-[50%] items-center">
              <div className="w-20 h-14 bg-white rounded-xl flex items-center justify-center">
                {(() => {
                  const Icon =
                    categoryIcons[transactions.category] || FaClipboardList;
                  return <Icon className="w-16 h-8" />;
                })()}
              </div>

              <div>
                <p>{transactions.description}</p>
              </div>
            </div>

            {/* Card Details */}
            <div className="grid grid-cols-2 w-[45%] md:ps-40 gap-y-2 text-sm">
              <p className="font-medium">Type</p>
              <p>{transactions.type}</p>

              <p className="font-medium">Category</p>
              <p>{transactions.category}</p>

              <p className="font-medium">Date</p>
              <p>{transactions.date}</p>
            </div>
          </div>

          {/* Spend Section */}
          <div className="mt-6 flex justify-between items-center">
            <div>
              <p className="text-sm mb-2 text-base-content/60">
                Total <span>{transactions.category}</span> {transactions.type}
              </p>
              <p className="flex items-center text-2xl font-semibold">
                <TbCurrencyTaka />
                12,000
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm mb-2 text-base-content/60">Total Balance</p>
              <p className="flex items-center text-2xl font-semibold">
                <TbCurrencyTaka />
                87,560
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-3 bg-gray-300 rounded-full mt-4 relative overflow-hidden">
            <div
              className="h-full bg-black rounded-full"
              style={{ width: "24%" }}
            ></div>
          </div>

          {/* Renew Info */}
          <div className="pt-4 flex justify-center md:mt-5 items-center">
            <StyledWrapper>
              {/* Second button: keeps the animated bubble behavior */}
              <button className="button rounded-full">
                Checkout Reports{" "}
                <span className="icon">
                  <MdArrowOutward />
                </span>
              </button>
            </StyledWrapper>
          </div>
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

export default TransactionDetails;

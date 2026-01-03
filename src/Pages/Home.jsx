import React from "react";
import Hero from "../Components/Hero";
import HeroBanner from "../Components/HeroBanner";
import Overview from "../Components/Overview";
import Tips from "../Components/Tips";
import WhyMatters from "../Components/WhyMatters";
import { Link, useLoaderData } from "react-router";
import TransactionsTable from "../Components/TransactionsTable";
import styled from "styled-components";
import { MdArrowOutward } from "react-icons/md";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <HeroBanner></HeroBanner>
      <Overview></Overview>
      <div className="mb-5">
        <h1 className="md:text-5xl font-semibold leading-16 text-center md:mb-10">
          Latest Transactions
        </h1>

        <div className="w-full px-3 sm:px-4 md:px-8 ">
          <div className="mx-auto mt-6 max-w-6xl rounded-3xl border border-base-200 bg-base-100 shadow-sm pb-8">
            {/* Header */}
            <div className="hidden grid-cols-12 items-center px-6 py-4 text-sm font-medium cursor-pointer text-gray-400 md:grid text-center">
              <div className="col-span-1 hover:text-emerald-600">SL</div>
              <div className="col-span-2 hover:text-emerald-600">Type</div>
              <div className="col-span-2 hover:text-emerald-600">Category</div>
              <div className="col-span-2 hover:text-emerald-600">Amount</div>
              <div className="col-span-2 hover:text-emerald-600">Date</div>
              <div className="col-span-3 hover:text-emerald-600">Action</div>
            </div>

            {data.map((transaction, index) => (
              <TransactionsTable
                key={transaction._id}
                transaction={transaction}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className="text-center md:pt-10 md:pb-10">
          <StyledWrapper>
            {/* Second button: keeps the animated bubble behavior */}
            <Link to={'/my-transactions'} className="button rounded-full">
              View More{" "}
              <span className="icon">
                <MdArrowOutward />
              </span>
            </Link>
          </StyledWrapper>
        </div>
      </div>
      <Tips></Tips>
      <WhyMatters></WhyMatters>
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

export default Home;

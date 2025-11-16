import React from "react";
import { FaChartLine, FaUsers, FaBrain, FaArrowRight } from "react-icons/fa";

const Overview = () => {
  return (
    <section className="pb-16 px-8 text-center">
      <h2 className="text-3xl md:text-5xl font-semibold mb-4">My Bag</h2>
      <p className="text-xl pt-3">
        Overview of total income, expenses and available balance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {/* =========================
             CARD 1 (STATIC BLACK)
        ========================== */}
        <div className="rounded-2xl shadow-sm p-8 bg-black text-white cursor-default">
          <div className="flex flex-col items-center justify-center text-center">
            <FaChartLine className="text-white text-4xl mb-6" />
            <p className="text-white font-semibold opacity-90 mb-3">
              Total Balance
            </p>
            <p className="text-3xl font-semibold opacity-90 mb-6">12,560</p>

            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black transition-all duration-300">
              <FaArrowRight />
            </div>
          </div>
        </div>

        {/* =========================
             CARD 2 (HOVER EFFECT)
        ========================== */}
        <div className="group rounded-2xl shadow-sm p-8 bg-[#ededed] transition-all duration-500 hover:bg-[#111111] hover:text-white cursor-pointer">
          <div className="flex flex-col items-center justify-center text-center">
            <FaUsers className="text-[#060025] text-4xl mb-6 transition-all duration-300 group-hover:text-white" />
            <p className="bg-gradient-to-r from-[#2a1a29] to-[#0b0c16] bg-clip-text text-transparent font-semibold opacity-90 mb-3 group-hover:text-white">
              Income
            </p>
            <p className="text-3xl font-semibold opacity-90 mb-6 group-hover:text-white">
              5,70,500
            </p>

            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:translate-x-2">
              <FaArrowRight />
            </div>
          </div>
        </div>

        {/* =========================
             CARD 3 (HOVER EFFECT)
        ========================== */}
        <div className="group rounded-2xl shadow-sm p-8 bg-[#ffffff] transition-all duration-500 hover:bg-[#111111] hover:text-white cursor-pointer">
          <div className="flex flex-col items-center justify-center text-center">
            <FaBrain className="text-[#060025] text-4xl mb-6 transition-all duration-300 group-hover:text-white" />
            <p className="bg-gradient-to-r from-[#2a1a29] to-[#0b0c16] bg-clip-text text-transparent font-semibold opacity-90 mb-3 group-hover:text-white">
              Expense
            </p>
            <p className="text-3xl font-semibold opacity-90 mb-6 group-hover:text-white">
              78,995
            </p>

            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:translate-x-2">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;

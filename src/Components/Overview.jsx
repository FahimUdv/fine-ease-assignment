import React, { useContext, useEffect, useState } from "react";
import { FaChartLine, FaUsers, FaBrain, FaArrowRight } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const Overview = () => {
  const { user } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // Check if user exists before fetching
    if (!user || !user.email) {
      setLoading(false);
      return;
    }

    fetch(`http://localhost:3000/my-tran?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTransactions(data);
        
        // Calculate totals
        let income = 0;
        let expense = 0;
        
        data.forEach(transaction => {
          const amount = Number(transaction.amount);
          
          if (transaction.type === "Income") {
            income += amount;
          } else if (transaction.type === "Expense") {
            expense += amount;
          }
        });
        
        // Set calculated values
        setTotalIncome(income);
        setTotalExpense(expense);
        setBalance(income - expense);
        
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
        setLoading(false);
      });
      
  }, [user]); // Changed to [user] instead of [user.email]

  // Show loading while user data is being fetched
  if (loading) {
    return (
      <div className="text-center py-16">
        <p className="text-xl">Loading your financial data...</p>
      </div>
    );
  }

  // Show message if user is not logged in
  if (!user) {
    return (
      <div className="text-center py-16">
        <p className="text-xl">Please log in to view your financial data.</p>
      </div>
    );
  }

  return (
    <section className="pb-16 px-8 text-center">
      <h2 className="text-3xl md:text-5xl font-semibold mb-4">My Bag</h2>
      <p className="text-xl pt-3">
        Overview of total income, expenses and available balance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {/* BALANCE CARD */}
        <div className="rounded-2xl shadow-sm p-8 bg-black text-white cursor-default">
          <div className="flex flex-col items-center justify-center text-center">
            <FaChartLine className="text-white text-4xl mb-6" />
            <p className="text-white font-semibold opacity-90 mb-3">
              Total Balance
            </p>
            <p className="text-3xl font-semibold opacity-90 mb-6">
              {balance.toLocaleString()} BDT
            </p>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black transition-all duration-300">
              <FaArrowRight />
            </div>
          </div>
        </div>

        {/* INCOME CARD */}
        <div className="group rounded-2xl shadow-sm p-8 bg-[#ededed] transition-all duration-500 hover:bg-[#111111] hover:text-white cursor-pointer">
          <div className="flex flex-col items-center justify-center text-center">
            <FaUsers className="text-[#060025] text-4xl mb-6 transition-all duration-300 group-hover:text-white" />
            <p className="bg-gradient-to-r from-[#2a1a29] to-[#0b0c16] bg-clip-text text-transparent font-semibold opacity-90 mb-3 group-hover:text-white">
              Income
            </p>
            <p className="text-3xl font-semibold opacity-90 mb-6 group-hover:text-white">
              {totalIncome.toLocaleString()} BDT
            </p>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:translate-x-2">
              <FaArrowRight />
            </div>
          </div>
        </div>

        {/* EXPENSE CARD */}
        <div className="group rounded-2xl shadow-sm p-8 bg-[#ffffff] transition-all duration-500 hover:bg-[#111111] hover:text-white cursor-pointer">
          <div className="flex flex-col items-center justify-center text-center">
            <FaBrain className="text-[#060025] text-4xl mb-6 transition-all duration-300 group-hover:text-white" />
            <p className="bg-gradient-to-r from-[#2a1a29] to-[#0b0c16] bg-clip-text text-transparent font-semibold opacity-90 mb-3 group-hover:text-white">
              Expense
            </p>
            <p className="text-3xl font-semibold opacity-90 mb-6 group-hover:text-white">
              {totalExpense.toLocaleString()} BDT
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
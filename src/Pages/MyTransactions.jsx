import React from "react";
import TransactionsTable from "../Components/TransactionsTable";
import { useLoaderData } from "react-router";

const MyTransactions = () => {
  const data = useLoaderData();
//   console.log(data);
  return (
    <div className="md:mx-28 md:mt-10 md:mb-20 flex flex-col justify-center">
      <h1 className="md:text-5xl font-semibold leading-16 text-center md:mb-10">
        My Transaction
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

      <div></div>
    </div>
  );
};

export default MyTransactions;

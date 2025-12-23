import React from "react";
import { Link, useLoaderData } from "react-router";

const TransactionsTable = ({ transaction, index }) => {
  const { type, category, amount, date, title, _id } = transaction;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  

  return (
    <div className="space-y-1 px-2 pb-2 pt-3 md:px-4">
      <div className={`grid grid-cols-1 gap-4 rounded-2xl px-4 py-4 md:grid-cols-12 md:items-center md:px-6 text-center  ${index % 2 === 0 ? "bg-green-50" : "bg-amber-50"}`}>

        {/* SL */}
        <div className="flex items-center justify-center md:col-span-1">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-base-100 text-sm font-semibold">
            {index + 1}
          </div>
        </div>

        {/* Type */}
        <div className="md:col-span-2">
          <p className="md:hidden mb-0.5 text-xs font-medium text-base-content/50">Type</p>
          <p className="text-base font-medium capitalize">{type}</p>
        </div>

        {/* Category */}
        <div className="md:col-span-2">
          <p className="md:hidden mb-0.5 text-xs font-medium text-base-content/50">Category</p>
          <p className="text-base capitalize">{category}</p>
        </div>

        {/* Amount */}
        <div className="md:col-span-2">
          <p className="md:hidden mb-0.5 text-xs font-medium text-base-content/50">Amount</p>
          <p className="text-base font-semibold">{amount}</p>
        </div>

        {/* Date */}
        <div className="md:col-span-2">
          <p className="md:hidden mb-0.5 text-xs font-medium text-base-content/50">Date</p>
          <p className="text-base">{formattedDate}</p>
        </div>

        {/* Actions */}
        <div className="md:col-span-3 flex justify-center gap-8 items-center">
          <Link to={`/transaction-details/${_id}`} className="text-sm font-semibold hover:underline">View</Link>
          <button className="text-sm font-semibold text-success hover:underline">Update</button>
          <button className="btn btn-ghost btn-xs btn-circle border border-error/30 text-error hover:bg-error/10">
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionsTable;

// src/components/TransactionsTable.jsx
import React from "react";

const TransactionsTable = () => {
  return (
    <div className="w-full px-3 sm:px-4 md:px-8">
      <div className="mx-auto mt-6 max-w-6xl rounded-3xl border border-base-200 bg-base-100 shadow-sm">

        {/* Header */}
        <div className="hidden grid-cols-12 items-center px-6 py-4 text-sm font-medium cursor-pointer text-gray-400 md:grid text-center">
          <div className="col-span-1 hover:text-emerald-600">SL</div>
          <div className="col-span-2 hover:text-emerald-600">Type</div>
          <div className="col-span-2 hover:text-emerald-600">Category</div>
          <div className="col-span-2 hover:text-emerald-600">Amount</div>
          <div className="col-span-2 hover:text-emerald-600">Date</div>
          <div className="col-span-3 hover:text-emerald-600">Action</div>
        </div>

        {/* Body */}
        <div className="space-y-3 px-2 pb-5 pt-3 md:px-4 md:pb-7">

          {/* Row 1 */}
          <div className="grid grid-cols-1 gap-4 rounded-2xl bg-amber-50 px-4 py-4 md:grid-cols-12 md:items-center md:px-6 text-center">

            {/* SL */}
            <div className="flex items-center justify-center md:col-span-1">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-base-100 text-sm font-semibold tracking-[0.25em]">
                01
              </div>
            </div>

            {/* Type */}
            <div className="md:col-span-2">
              <p className="md:hidden mb-0.5 text-xs font-medium text-base-content/50">Type</p>
              <p className="text-base font-medium">Expense</p>
            </div>

            {/* Category */}
            <div className="md:col-span-2">
              <p className="md:hidden mb-0.5 text-xs font-medium text-base-content/50">Category</p>
              <p className="text-base">Shopping</p>
            </div>

            {/* Amount */}
            <div className="md:col-span-2">
              <p className="md:hidden mb-0.5 text-xs font-medium text-base-content/50">Amount</p>
              <p className="text-base font-semibold">1230</p>
            </div>

            {/* Date */}
            <div className="md:col-span-2">
              <p className="md:hidden mb-0.5 text-xs font-medium text-base-content/50">Date</p>
              <p className="text-base">25 Jan, 2025</p>
            </div>

            {/* Action */}
            <div className="md:col-span-3 flex justify-center gap-8 items-center">
              <button className="text-sm font-semibold hover:underline">View Details</button>
              <button className="text-sm font-semibold text-success hover:underline">Update</button>
              <button className="btn btn-ghost btn-xs btn-circle border border-error/30 text-error hover:bg-error/10">
                ✕
              </button>
            </div>

          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 gap-4 rounded-2xl bg-emerald-50 px-4 py-4 md:grid-cols-12 md:items-center md:px-6 text-center">

            {/* SL */}
            <div className="flex items-center justify-center md:col-span-1">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-base-100 text-sm font-semibold tracking-[0.25em]">
                02
              </div>
            </div>

            {/* Type */}
            <div className="md:col-span-2">
              <p className="md:hidden mb-0.5 text-xs font-medium text-base-content/50">Type</p>
              <p className="text-base font-medium">Income</p>
            </div>

            {/* Category */}
            <div className="md:col-span-2">
              <p className="md:hidden mb-0.5 text-xs font-medium text-base-content/50">Category</p>
              <p className="text-base">Salary</p>
            </div>

            {/* Amount */}
            <div className="md:col-span-2">
              <p className="md:hidden mb-0.5 text-xs font-medium text-base-content/50">Amount</p>
              <p className="text-base font-semibold">26300</p>
            </div>

            {/* Date */}
            <div className="md:col-span-2">
              <p className="md:hidden mb-0.5 text-xs font-medium text-base-content/50">Date</p>
              <p className="text-base">29 Jan, 2025</p>
            </div>

            {/* Action */}
            <div className="md:col-span-3 flex justify-center gap-8 items-center">
              <button className="text-sm font-semibold hover:underline">View Details</button>
              <button className="text-sm font-semibold text-success hover:underline">Update</button>
              <button className="btn btn-ghost btn-xs btn-circle border border-error/30 text-error hover:bg-error/10">
                ✕
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default TransactionsTable;

import React, { use, useContext } from "react";
import coins from "../assets/coins.jpg";
import { AuthContext } from "../Provider/AuthProvider";

const AddTransactions = () => {
  const { user } = useContext(AuthContext);

  const handleAddTransaction = (e) => {
    e.preventDefault();

    const formData = {
      type: e.target.type.value,
      title: e.target.title.value,
      category: e.target.category.value,
      amount: e.target.amount.value,
      description: e.target.description.value,
      date: e.target.date.value,
      email: user.email,
    };

    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      }
    )
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log("Error adding transaction:", error);
    }); 
  };

  return (
    <div className="md:mt-10 md:mb-20">
      <h1 className="md:text-5xl font-semibold leading-16 text-center md:mb-10">
        Add Transaction
      </h1>

      <div className="max-w-6xl mx-auto md:px-18 md:py-10 md:my-10 rounded-3xl border border-gray-200 shadow-sm bg-white">
        {/* Top Title */}
        <p className="text-sm text-gray-500 mb-2 md:mb-10">
          Finease – Your finance tracker
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-8 md:mb-10">
          Add a New Transaction to Keep Your Finances <br /> Organized and
          Up-to-Date
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* -------- Left Form Section -------- */}
          <form onSubmit={handleAddTransaction} className="space-y-6">
            {/* Row 1 */}
            {/* Description */}
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="input input-bordered bg-gray-100 w-full"
            />

            <div className="grid grid-cols-3 gap-4">
              <select
                name="type"
                className="select select-bordered bg-gray-100 w-full"
              >
                <option>Income</option>
                <option>Expense</option>
              </select>

              <select
                name="category"
                className="select select-bordered bg-gray-100 w-full"
              >
                <option>Salary</option>
                <option>Investment</option>
                <option>House Rent</option>
                <option>Food</option>
                <option>Cloth</option>
                <option>Home Accessories</option>
                <option>Transport</option>
                <option>Gift</option>
                <option>Others</option>
              </select>

              <input
                type="number"
                name="amount"
                placeholder="Amount"
                className="input input-bordered bg-gray-100 w-full"
              />
            </div>

            {/* Description */}
            <textarea
              placeholder="Type"
              name="description"
              className="textarea textarea-bordered bg-gray-100 w-full h-32"
            ></textarea>

            {/* Row 3 */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                name="date"
                value={new Date().toISOString().split("T")[0]}
                readOnly
                className="input input-bordered bg-gray-100 w-full"
              />

              <input
                type="email"
                value={user?.email || ""}
                readOnly
                className="input input-bordered bg-gray-100 w-full"
              />
            </div>

            {/* Submit Button */}
            <button className="btn w-full bg-black text-white rounded-none hover:bg-gray-800">
              Add Transaction
            </button>
          </form>

          {/* -------- Right Image Section -------- */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={coins}
              alt="finance"
              className="rounded-3xl w-full h-[350px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTransactions;

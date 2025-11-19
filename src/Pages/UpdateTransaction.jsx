import React from "react";
import img1 from "../assets/img1.jpg";

const UpdateTransaction = () => {
  return (
    <div className="md:mt-10 md:mb-20">
      <h1 className="md:text-5xl font-semibold leading-16 text-center md:mb-10">
        Update Transaction
      </h1>

      <div className="max-w-6xl mx-auto md:px-18 md:py-10 md:my-10 rounded-3xl border border-gray-200 shadow-sm bg-white">
        {/* Top Title */}
        <p className="text-sm text-gray-500 mb-2 md:mb-10">
          Finease – Your finance tracker
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-8 md:mb-10">
          Edit Your Transaction and Maintain a Perfect <br></br>Financial History
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* -------- Left Form Section -------- */}
          <form className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-3 gap-4 md:mt-4">
              <select className="select select-bordered bg-gray-100 w-full">
                <option>Income</option>
                <option>Expense</option>
              </select>

              <select className="select select-bordered bg-gray-100 w-full">
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
                placeholder="Amount"
                className="input input-bordered bg-gray-100 w-full"
              />
            </div>

            {/* Description */}
            <textarea
              placeholder="Type"
              className="textarea textarea-bordered bg-gray-100 w-full h-32"
            ></textarea>

            {/* Row 3 */}
            <div className="grid grid-cols-3 gap-4">
              <input
                type="date"
                className="input input-bordered bg-gray-100 w-full"
              />
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered bg-gray-100 w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered bg-gray-100 w-full"
              />
            </div>

            {/* Submit Button */}
            <button className="btn w-full bg-black text-white rounded-none hover:bg-gray-800">
              Update
            </button>
          </form>

          {/* -------- Right Image Section -------- */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={img1}
              alt="finance"
              className="rounded-3xl w-full h-[350px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTransaction;

// import React, { useContext, useEffect, useState } from "react";
// import img1 from "../assets/img1.jpg";
// import { useLoaderData, useParams } from "react-router";
// import { AuthContext } from "../Provider/AuthProvider";
// import { toast } from "react-toastify";

// const UpdateTransaction = () => {
//   // const { user } = useContext(AuthContext);
//   // const data = useLoaderData();
//   // const [transactions, setTransactions] = useState(data.result);

//   // console.log(transactions);

//   const { user } = useContext(AuthContext);
//   const { id } = useParams();
//   const [transaction, setTransaction] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`http://localhost:3000/transactions/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setTransaction(data.result);
//         setLoading(false);
//       });
//   }, [id]);

//   const handleAddTransaction = (e) => {
//     e.preventDefault();

//     const formData = {
//       type: e.target.type.value,
//       title: e.target.title.value,
//       category: e.target.category.value,
//       amount: e.target.amount.value,
//       description: e.target.description.value,
//       date: e.target.date.value,
//       email: user.email,
//     };

//     fetch(`http://localhost:3000/transactions/${transaction._id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         toast.success("Transaction updated successfully!");
//       })
//       .catch((error) => {
//         console.log("Error adding transaction:", error);
//       });
//   };

//   return (
//     <div className="md:mt-10 md:mb-20">
//       <h1 className="md:text-5xl font-semibold leading-16 text-center md:mb-10">
//         Update Transaction
//       </h1>

//       <div className="max-w-6xl mx-auto md:px-18 md:py-10 md:my-10 rounded-3xl border border-gray-200 shadow-sm bg-white">
//         {/* Top Title */}
//         <p className="text-sm text-gray-500 mb-2 md:mb-10">
//           Finease – Your finance tracker
//         </p>
//         <h1 className="text-3xl font-bold leading-tight mb-8 md:mb-10">
//           Edit Your Transaction and Maintain a Perfect <br></br>Financial
//           History
//         </h1>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           {/* -------- Left Form Section -------- */}
//           <form onSubmit={handleAddTransaction} className="space-y-6">
//             {/* Row 1 */}
//             {/* Description */}
//             <input
//               defaultValue={transaction.title}
//               type="text"
//               name="title"
//               placeholder="Title"
//               className="input input-bordered bg-gray-100 w-full"
//             />

//             <div className="grid grid-cols-3 gap-4">
//               <select
//                 name="type"
//                 value={transaction.type}
//                 onChange={(e) =>
//                   setTransaction({ ...transaction, type: e.target.value })
//                 }
//                 className="select select-bordered bg-gray-100 w-full"
//               >
//                 <option value="income">Income</option>
//                 <option value="expanse">Expanse</option>
//               </select>

//               <select
//                 defaultValue={transaction.category}
//                 name="category"
//                 className="select select-bordered bg-gray-100 w-full"
//               >
//                 <option>Salary</option>
//                 <option>Investment</option>
//                 <option>House Rent</option>
//                 <option>Food</option>
//                 <option>Cloth</option>
//                 <option>Home Accessories</option>
//                 <option>Transport</option>
//                 <option>Gift</option>
//                 <option>Others</option>
//               </select>

//               <input
//                 defaultValue={transaction.amount}
//                 type="number"
//                 name="amount"
//                 placeholder="Amount"
//                 className="input input-bordered bg-gray-100 w-full"
//               />
//             </div>

//             {/* Description */}
//             <textarea
//               defaultValue={transaction.description}
//               placeholder="Type"
//               name="description"
//               className="textarea textarea-bordered bg-gray-100 w-full h-32"
//             ></textarea>

//             {/* Row 3 */}
//             <div className="grid grid-cols-2 gap-4">
//               <input
//                 type="date"
//                 name="date"
//                 value={new Date().toISOString().split("T")[0]}
//                 readOnly
//                 className="input input-bordered bg-gray-100 w-full"
//               />

//               <input
//                 type="email"
//                 value={transaction.email}
//                 readOnly
//                 className="input input-bordered bg-gray-100 w-full"
//               />
//             </div>

//             {/* Submit Button */}
//             <button className="btn w-full bg-black text-white rounded-none hover:bg-gray-800">
//               Update
//             </button>
//           </form>

//           {/* -------- Right Image Section -------- */}
//           <div className="flex justify-center lg:justify-end">
//             <img
//               src={img1}
//               alt="finance"
//               className="rounded-3xl w-full h-[350px] object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateTransaction;









import React, { useContext, useEffect, useState } from "react";
import img1 from "../assets/img1.jpg";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const UpdateTransaction = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        // Get Firebase token
        const token = await user.getIdToken();
        
        const response = await fetch(`http://localhost:3000/transactions/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        const data = await response.json();
        console.log(data);
        setTransaction(data.result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching transaction:", error);
        toast.error("Failed to load transaction");
        setLoading(false);
      }
    };

    if (user) {
      fetchTransaction();
    }
  }, [id, user]);

  const handleAddTransaction = async (e) => {
    e.preventDefault();

    const formData = {
      type: e.target.type.value,
      title: e.target.title.value,
      category: e.target.category.value,
      amount: parseFloat(e.target.amount.value),
      description: e.target.description.value,
      date: e.target.date.value,
      email: user.email,
    };

    try {
      const response = await fetch(`http://localhost:3000/transactions/${transaction._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (data.success) {
        toast.success("Transaction updated successfully!");
        navigate(`/transaction-details/${transaction._id}`);
        // Optional: navigate back to transactions list
        // navigate('/transactions');
      } else {
        toast.error("Failed to update transaction");
      }
    } catch (error) {
      console.error("Error updating transaction:", error);
      toast.error("Error updating transaction");
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  // Show error if transaction not found
  if (!transaction) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-red-500">Transaction not found</div>
      </div>
    );
  }

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
          Edit Your Transaction and Maintain a Perfect <br />Financial History
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* -------- Left Form Section -------- */}
          <form onSubmit={handleAddTransaction} className="space-y-6">
            {/* Title */}
            <input
              defaultValue={transaction.title}
              type="text"
              name="title"
              placeholder="Title"
              required
              className="input input-bordered bg-gray-100 w-full"
            />

            <div className="grid grid-cols-3 gap-4">
              {/* Type */}
              <select
                name="type"
                defaultValue={transaction.type}
                className="select select-bordered bg-gray-100 w-full"
              >
                <option value="income">Income</option>
                <option value="expanse">Expanse</option>
              </select>

              {/* Category */}
              <select
                defaultValue={transaction.category}
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

              {/* Amount */}
              <input
                defaultValue={transaction.amount}
                type="number"
                name="amount"
                placeholder="Amount"
                required
                step="0.01"
                className="input input-bordered bg-gray-100 w-full"
              />
            </div>

            {/* Description */}
            <textarea
              defaultValue={transaction.description}
              placeholder="Description"
              name="description"
              className="textarea textarea-bordered bg-gray-100 w-full h-32"
            ></textarea>

            {/* Date and Email */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                name="date"
                defaultValue={transaction.date}
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
            <button 
              type="submit"
              className="btn w-full bg-black text-white rounded-none hover:bg-gray-800"
            >
              Update Transaction
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
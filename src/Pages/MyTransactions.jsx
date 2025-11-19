import React from 'react';
import TransactionsTable from '../Components/TransactionsTable';

const MyTransactions = () => {
    return (
        <div className='md:mx-28 md:my-20 flex flex-col justify-center'>
           {/* <h1 className='md:text-5xl font-semibold leading-16 text-center md:mt-10'>My Transaction</h1>
           <div className='flex flex-col md:flex-row justify-between items-center bg-gray-50 rounded-2xl p-8 shadow-sm gap-6 md:mt-10'>
            <div className='bg-white rounded-2xl p-4 shadow-md'>
                <p className='text-lg'>01</p>
            </div>
            <div className='bg-white rounded-2xl p-4 shadow-md'>
                <p className='text-lg font-semibold'>Type: <span>Expense</span></p>
            </div>
            <div className='bg-white rounded-2xl p-4 shadow-md'>
                <p className='text-lg font-semibold'>Category:  <span>Shopping</span></p>
            </div>
            <div className='flex items-center bg-white rounded-2xl p-4 shadow-md'>
                <p className='text-lg font-semibold md:me-3'>Amount:  </p>
                <input type="number" value="1000" readonly className="input input-bordered w-full bg-base-200 text-gray-700 font-semibold" />
            </div>
            <div className='bg-white rounded-2xl p-4 shadow-md'>
                <p className='text-lg font-semibold'>Date:  <span>25 January, 2025</span></p>
            </div>
            <button className='btn btn-primary'>View Details</button>
            <button className='btn btn-primary'>Update</button>
            <button className='btn btn-primary'>Delete</button>
           </div>





           <div className='flex flex-col md:flex-row justify-between items-center bg-gray-50 rounded-2xl p-8 shadow-sm gap-6 md:my-10'>
            <div className='bg-white rounded-2xl p-4 shadow-md'>
                <p className='text-lg'>01</p>
            </div>
            <div className='bg-white rounded-2xl p-4 shadow-md'>
                <p className='text-lg font-semibold'>Type: <span>Expense</span></p>
            </div>
            <div className='bg-white rounded-2xl p-4 shadow-md'>
                <p className='text-lg font-semibold'>Category:  <span>Shopping</span></p>
            </div>
            <div className='flex items-center bg-white rounded-2xl p-4 shadow-md'>
                <p className='text-lg font-semibold md:me-3'>Amount:  </p>
                <input type="number" value="1000" readonly className="input input-bordered w-full bg-base-200 text-gray-700 font-semibold" />
            </div>
            <div className='bg-white rounded-2xl p-4 shadow-md'>
                <p className='text-lg font-semibold'>Date:  <span>25 January, 2025</span></p>
            </div>
            <button className='btn btn-primary'>View Details</button>
            <button className='btn btn-primary'>Update</button>
            <button className='btn btn-primary'>Delete</button>
           </div> */}












            <h1 className='md:text-5xl font-semibold leading-16 text-center md:mb-10'>My Transaction</h1>

           <div>
                <TransactionsTable></TransactionsTable>
           </div>
        </div>
    );
};

export default MyTransactions;
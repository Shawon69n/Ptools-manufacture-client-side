import React from 'react';

const MyOrders = () => {
    return (
        <div>

            <div  className="overflow-x-auto">
  <table  className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr className='text-center'>
        <th>Product name</th>
        <th>Ordered Quantity</th>
        <th>Date</th>
        <th>Cancel</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody className='text-center'>
            <tr>
            <th>Brush</th>
            <td>100</td>
            <td>26-5-2022</td>
            <td><button className='btn-accent btn text-white btn-xs'>Pay</button></td>
            <td> <button className="btn btn-error hover:bg-red-600 btn-xs">Cancel</button></td>
          </tr>
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading';

const ManageOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/manageorders', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
  
   
    return (
        <div>
            <div className="overflow-x-auto w-full mt-5">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr className='text-center'>
                            <th>Product name</th>
                            <th>Ordered Quantity</th>
                            <th>Total price</th>
                            <th>TransactionId</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>

                        {orders.map((order, index) =>
                            <tr>
                                <th>{order.productName}</th>
                                <td>{order.orderedQuantity}</td>
                                <td>{order.totalPrice}</td>
                                <td>{order.transactionId}</td>

                                <td>
                                    {order?.paid && <p disabled className='text-white bg-green-400 rounded-full'>Paid</p>}
                                    {!order?.paid && <p  className=' text-white bg-slate-500 rounded-full '>Pending</p>}
                                </td>

                                <td> <button className="btn btn-error hover:bg-red-600 btn-xs">Cancel</button></td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;
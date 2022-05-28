import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
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
    
    const handleRemoveOrder = (id) => {
    
        fetch(`http://localhost:5000/manageorders/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              toast.success('Removed user')
              refetch()
            }
          })
        
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
                            <th>Email</th>
                            <th>TransactionId</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>

                        {orders.map((order, index) =>
                            <tr>
                                <th className='text-sm'>{order.productName}</th>
                                <td className='text-sm'>{order.orderedQuantity}</td>
                                <td className='text-sm'>{order.totalPrice}</td>
                                <td className='text-sm'>{order.email}</td>
                                <td className='text-sm'>{order.transactionId}</td>

                                <td>
                                    {order?.paid && <p disabled className='text-white text-sm bg-green-400 rounded-full'>Paid</p>}
                                    {!order?.paid && <p  className=' text-white bg-slate-500 rounded-full text-sm'>Pending</p>}
                                </td>

                                <td> {order?.paid ? '' :<button onClick={() => handleRemoveOrder(order?._id)} className="btn btn-error hover:bg-red-600  btn-xs"><span className='text-xs'>Remove</span></button>}</td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;
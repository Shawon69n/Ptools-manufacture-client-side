import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading';
const Swal = require('sweetalert2')
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
    
    const handleRemoveOrder = (id,e,quant,p) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to remove order of : ${e} , product : ${p} , orderd quantity : ${quant}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              fetch(`http://localhost:5000/manageorders/${id}`, {
                method: 'DELETE'
              })
                .then(res => res.json())
                .then(data => {
                  if (data.deletedCount > 0) {
                    refetch()
                  }
                })
      
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

                                <td> {order?.paid ? '' :<button onClick={() => handleRemoveOrder(order?._id,order.email,order.orderedQuantity,order.productName)} className="btn btn-error hover:bg-red-600  btn-xs"><span className='text-xs'>Remove</span></button>}</td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;
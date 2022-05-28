import React from 'react';
import { Link } from 'react-router-dom';
const Swal = require('sweetalert2')
const MyOrdersRow = ({ order, refetch }) => {
  const { productName, orderedQuantity, totalPrice, _id ,transactionId } = order;

  const HandleRemoveUser = (pd,quant) => {
    

    Swal.fire({
      title: 'Are you sure?',
      text: `You want to cancel : ${pd}, Quantity : ${quant} `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Cancel it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Cancelled!',
          'Your order is cancelled.',
          'success'
        )
        fetch(`http://localhost:5000/manageorders/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch();
            }
          })
      }
    })





  }

  return (
    <tr>
      <th>{productName}</th>
      <td>{orderedQuantity}</td>
      <td>{totalPrice}</td>
      <td>{transactionId}</td>

      <td>
        {!order?.paid && <Link to={`/dashboard/payment/${_id}`}><button className='btn-accent btn text-white btn-xs'>Pay</button></Link>}
        {order?.paid && <button disabled className='btn-accent btn text-white font-semibold btn-xs'>Paid</button>}
      </td>

      <td> { order?.paid ? '':<button onClick={() =>HandleRemoveUser(productName,orderedQuantity)} className="btn btn-error hover:bg-red-600 btn-xs">Cancel</button>}</td>
    </tr>
  );
};

export default MyOrdersRow;
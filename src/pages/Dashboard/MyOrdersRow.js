import React from 'react';

const MyOrdersRow = ({order,refetch}) => {
    const {productName,orderedQuantity,totalPrice,_id} = order;

    const HandleRemoveUser = () =>{
      const Swal = require('sweetalert2')

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
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
          fetch(`http://localhost:5000/orders/${_id}`,{
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              if(data.deletedCount > 0){
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
        <td><button className='btn-accent btn text-white btn-xs'>Pay</button></td>
        <td> <button onClick={HandleRemoveUser} className="btn btn-error hover:bg-red-600 btn-xs">Cancel</button></td>
      </tr>
    );
};

export default MyOrdersRow;
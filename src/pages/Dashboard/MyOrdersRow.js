import React from 'react';

const MyOrdersRow = ({order}) => {
    const {productName,orderedQuantity,totalPrice} = order;
    return (
        <tr>
        <th>{productName}</th>
        <td>{orderedQuantity}</td>
        <td>{totalPrice}</td>
        <td><button className='btn-accent btn text-white btn-xs'>Pay</button></td>
        <td> <button className="btn btn-error hover:bg-red-600 btn-xs">Cancel</button></td>
      </tr>
    );
};

export default MyOrdersRow;
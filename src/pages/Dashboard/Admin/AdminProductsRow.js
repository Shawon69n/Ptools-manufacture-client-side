const AdminProductsRow = ({product}) => {

    return (
        <tr>
            <th>{product.name}</th>
            <td>{product.price}</td>
            <td>{product.availableQuantity}</td>
            <td>{product.minimumQuantity}</td>
            <td> <button  className="btn btn-error hover:bg-red-600 btn-xs">Remove</button></td>
        </tr>
    );
};

export default AdminProductsRow;
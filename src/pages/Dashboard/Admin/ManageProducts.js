import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading';
import AdminProductsRow from './AdminProductsRow';

const ManageProducts = () => {
    const {data: products ,  isLoading , refetch} = useQuery('/products' , () => fetch('https://fathomless-wave-90975.herokuapp.com/products')
    .then(res => res.json()))

    if(isLoading){
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
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Minimum Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>

                        {products.map(product => <AdminProductsRow key={product._id} product={product} refetch={refetch}></AdminProductsRow>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;
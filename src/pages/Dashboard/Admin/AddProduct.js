import React from 'react';
import { toast } from 'react-toastify';

const Swal = require('sweetalert2')
const AddProduct = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    const handleAddProduct = e => {
        e.preventDefault();
        const productDetail = {
            name: e.target.name.value,
            price: e.target.price.value,
            details: e.target.description.value,
            availableQuantity: e.target.availableQuant.value,
            minimumQuantity: e.target.MinimuQuant.value,
            image: e.target.img.value

        }

        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(productDetail),
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.acknowledged) {
                    Toast.fire({
                        icon: 'success',
                        title: 'Product added successfully'
                      })
                    e.target.reset()
                }
            });
    }
    return (
        <div className='w-96 ml-80'>
                <h1 className='text-2xl text-center text-slate-800 font-serif font-bold mt-10'>Add new product</h1>
            <form onSubmit={handleAddProduct} className='mt-10 ' action="">
               <div className='flex flex-col'>
               <input className='mb-2  shadow-2xl  input input-bordered' type="text" name='name' placeholder='Product name' required />
                <input className='mb-2  shadow-2xl input input-bordered ' type="number" name='MinimuQuant' placeholder='Minimum Quantity' required />
                <input className='mb-2  shadow-2xl input input-bordered' type="number" name='availableQuant' placeholder='Available Qauntity' required />
                <input className='mb-2  shadow-2xl input input-bordered' type="number" name='price' placeholder='Price' required />
                <textarea className='mb-2 shadow-2xl input input-bordered' type="text" name='description' placeholder='Description' required />
                <input className='mb-2 shadow-2xl input input-bordered' type="text" name='img' placeholder='img url' required />
                <input className='btn btn-primary ' type="submit" value="Add product" />
               </div>
            </form>
            
        </div>
    );
};

export default AddProduct;
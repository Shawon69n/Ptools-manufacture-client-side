import React from 'react';
import { toast } from 'react-toastify';
import useAdmin from '../../Hooks/useAdmin';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
const UserDetailsRow = ({user,refetch}) => {
    const {email , name , _id} = user;
    const [admin] = useAdmin(user);

    const makeAdmin = () =>{
        fetch(`http://localhost:5000/users/admin/${email}`,{
            method: 'PUT',
            
        })
        .then(res => {
           return res.json()
            
        })
        .then(data => {
            if(data.modifiedCount === 1){
                toast.success('Successfully made an admin')
                refetch();
            
            }
            else{
                toast.error('Failed to make an admin')
            }
            
           
        })
    }

    

    return (
        <>
        <tr>
        <th>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>
        <div className="font-bold text-center">{email}</div>
        </td>
        <td>{admin ? <p className='text-2xl ml-8'><MdOutlineAdminPanelSettings></MdOutlineAdminPanelSettings></p> : <button onClick={makeAdmin} className='btn-accent btn text-white btn-xs'>make admin</button>}</td>
        <th>
          <button  className="btn btn-error hover:bg-red-600 btn-xs">Remove</button>
        </th>
      </tr>
      </>
    );
};

export default UserDetailsRow;
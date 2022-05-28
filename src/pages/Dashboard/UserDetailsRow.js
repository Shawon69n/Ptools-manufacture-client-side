import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useAdmin from '../../Hooks/useAdmin';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
const UserDetailsRow = ({ user, setUsers }) => {
  const { email, name, _id } = user;
  const [admin] = useAdmin(user);

  const makeAdmin = () => {
    fetch(`http://localhost:5000/users/admin/${email}`, {
      method: 'PUT',

    })
      .then(res => {
        return res.json()

      })
      .then(data => {
        if (data.modifiedCount === 1) {
          toast.success('Successfully made an admin')

        }
        else {
          toast.error('Failed to make an admin')
        }


      })
  }

  const handleRmoveUser = () => {
     
    fetch(`http://localhost:5000/user/${_id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          toast.success('Removed user')
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
        <td>{admin ? '' :<button onClick={handleRmoveUser} className='btn btn-xs btn-error'>Remove user</button>}</td>
      </tr>
    </>
  );
};

export default UserDetailsRow;
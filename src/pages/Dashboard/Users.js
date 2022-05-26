import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const Users = () => {
    const {data: users ,isLoading } = useQuery('users' , () => fetch('http://localhost:5000/users')
    .then(res => res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Authorize</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {users.map((user,index) => <>
        <tr>
        <th>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold">{user?.name}</div>
            </div>
          </div>
        </td>
        <td>
        <div className="font-bold text-center">{user?.email}</div>
        </td>
        <td><button className='btn-accent btn text-white btn-xs'>make admin</button></td>
        <th>
          <button className="btn btn-error hover:bg-red-600 btn-xs">Remove</button>
        </th>
      </tr>
      </>)}
    </tbody>
  
    
  </table>
</div>
        </div>
    );
};

export default Users;
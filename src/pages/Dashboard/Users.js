import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UserDetailsRow from './UserDetailsRow';

const Users = () => {

  const [users,setUsers] = useState([])
  useEffect(() =>{
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data) )
  },[users])
  // const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users')
  //   .then(res => res.json()))
  // if (isLoading) {
  //   return <Loading></Loading>
  // }
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
            {users.map((user, index) => <UserDetailsRow user={user}  key={index} ></UserDetailsRow>)}
          </tbody>


        </table>
      </div>
    </div>
  );
};

export default Users;
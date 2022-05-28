import { toast } from 'react-toastify';
import useAdmin from '../../Hooks/useAdmin';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';

const Swal = require('sweetalert2')
const UserDetailsRow = ({ user, setUsers }) => {
  const { email, name, _id } = user;
  const [admin] = useAdmin(user);
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
  const makeAdmin = () => {
    fetch(`https://fathomless-wave-90975.herokuapp.com/users/admin/${email}`, {
      method: 'PUT',

    })
      .then(res => {
        return res.json()

      })
      .then(data => {
        if (data.modifiedCount === 1) {
          Toast.fire({
            icon: 'success',
            title: 'Made an admin succesfully'
          })

        }
        else {
          toast.error('Failed to make an admin')
        }


      })
  }

  const handleRmoveUser = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        fetch(`https://fathomless-wave-90975.herokuapp.com/user/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            
          })

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
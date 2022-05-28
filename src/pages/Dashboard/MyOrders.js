import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import MyOrdersRow from './MyOrdersRow';

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  // const [orders,setOrders] = useState([]);

  const {data: orders ,  isLoading , refetch} = useQuery('orders' , () => fetch(`https://fathomless-wave-90975.herokuapp.com/orders?email=${email}`,{
          method: 'GET',
          headers: {
            'content-type' : 'application/json'
          }
        })
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
              <th>Ordered Quantity</th>
              <th>Total price</th>
              <th>TransactionId</th>
              <th>Payment</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            
            {orders.map(order => <MyOrdersRow key={order._id} order={order} refetch={refetch}></MyOrdersRow>)}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../DefaultLayout/Header';
import Sidebar from '../DefaultLayout/Sidebar';
// import styles from './users.module.scss';
const Cart = () => {
  // const [cart, setCart] = useState([]);
  // const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getcartDeails = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get('/carts/user/1');
      console.log('respppppp data--------', data);
      data.forEach((element) => {
        console.log('ele', element.products);
      });
      data.filter((item) => item.userId === '1');
      // setCart(data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getcartDeails();
  }, []);

  // const getProductDetails = async (id) => {
  //   setIsLoading(true);
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     // setProduct(data);
  //     console.log('data', data);
  //   } catch (error) {
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  return (
    <>
      <Header />
      <Sidebar />
      {isLoading ? (
        <i className='loader fa fa-spinner fa-spin' />
      ) : (
        <>
          <div className='main'>
            <h2 className='category-container text-center'>Cart</h2>
            <div className='m-40 p-30'>
              {/* <table className={styles.customers}>
                <tr>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Address</th>
                </tr>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td className='capital'>
                      {user?.name?.firstname} {user?.name?.lastname}
                    </td>
                    <td>{user?.username}</td>
                    <td>{user?.email}</td>
                    <td className='capital'>
                      {user?.address?.number} {user?.address?.street},{' '}
                      {user?.address?.city}
                    </td>
                  </tr>
                ))}
              </table> */}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Cart;

import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../DefaultLayout/Header';
import Sidebar from '../DefaultLayout/Sidebar';
import styles from './users.module.scss';
const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getUsers = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get('/users');
      setUsers(data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <Header />
      <Sidebar />
      {isLoading ? (
        <i className='loader fa fa-spinner fa-spin' />
      ) : (
        <>
          <div className='main'>
            <h2 className='category-container text-center'>Users</h2>
            <div className='m-40 p-30'>
              <table className={styles.customers}>
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
                    {/* <td className='capital'>{user?.name?.lastname}</td> */}
                    <td>{user?.username}</td>
                    <td>{user?.email}</td>
                    <td className='capital'>
                      {user?.address?.number} {user?.address?.street},{' '}
                      {user?.address?.city}
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Users;

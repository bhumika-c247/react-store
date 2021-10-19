import './header.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import axios from 'axios';

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const username = localStorage.getItem('username');
  const onLogout = () => {
    // const token = localStorage.getItem('token');
    localStorage.removeItem('token');
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/');
    }
    getLoggedInUserDetails();
    // eslint-disable-next-line
  }, []);
  const getLoggedInUserDetails = async () => {
    try {
      const { data } = await axios.get('/users');
      let loggedInUserId = data.filter((item) => item.username === username)[0]
        ?.id;
      localStorage.setItem('id', loggedInUserId);
    } catch (error) {
    } finally {
    }
  };
  console.log('history----------', location.pathname);
  return (
    <div className='navbar'>
      <Link to='/' onClick={onLogout}>
        <i className='fa fa-sign-out' />
      </Link>
      <Link
        to='/cart'
        className={location.pathname === '/cart' ? 'active' : ''}
      >
        <i className='fa fa-shopping-cart' />
      </Link>
      <span className='username'> {username} </span>
    </div>
  );
};

export default Header;

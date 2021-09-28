import './header.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

const Header = () => {
  const history = useHistory();
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
    // eslint-disable-next-line
  }, []);
  return (
    <div className='navbar'>
      {/* <div className='logo'>Trendy Store</div> */}
      <Link to='/' onClick={onLogout}>
        <i className='fa fa-sign-out' />
      </Link>

      <span className='username'> {username} </span>
    </div>
  );
};

export default Header;

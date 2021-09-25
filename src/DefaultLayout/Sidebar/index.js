import './sidebar.scss';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <nav className='nav__cont'>
      <ul className='nav'>
        <li className='nav__items '>
          <i className='fa fa-bars big-icon' />
          <Link to='/'>Category</Link>
        </li>

        <li className='nav__items '>
          <i className='fa fa-archive big-icon' />
          <Link to='/products'> Products</Link>
        </li>

        <li className='nav__items '>
          <i className='fa fa-users big-icon' />
          <Link to='/'> Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;

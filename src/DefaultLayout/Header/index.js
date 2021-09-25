import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='navbar'>
      <Link to='/'>
        <i className='fa fa-sign-out' />
      </Link>
      <Link to='/cart'>
        <i className='fa fa-shopping-bag' />
      </Link>{' '}
    </div>
  );
};

export default Header;

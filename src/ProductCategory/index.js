import { Link } from 'react-router-dom';
import styles from '../Home/Product/product.module.scss';

const Category = ({ category }) => {
  console.log('category----------------', category);
  return (
    <div className={`${styles.card} p-10 m-10`}>
      <Link to={`/products/category/${category}`}>{category}</Link>
    </div>
  );
};

export default Category;

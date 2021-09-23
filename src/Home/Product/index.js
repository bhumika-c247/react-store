import { Link } from 'react-router-dom';
import styles from './product.module.scss';

const Product = ({ product }) => {
  console.log('product----------------', product);
  return (
    <div className={`${styles.card} p-10 m-10`}>
      <Link to={`/products/${product?.id}`}>{product?.title}</Link>
    </div>
  );
};

export default Product;

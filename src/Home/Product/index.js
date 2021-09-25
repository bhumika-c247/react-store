import { Link } from 'react-router-dom';
import styles from './product.module.scss';

const Product = ({ product }) => {
  console.log('product----------------', product.title.length);
  return (
    <div className={`${styles.row} `}>
      <span className={`${styles.column} `}>
        <Link to={`/products/${product?.id}`}>
          <span>
            <p className={styles.product_text}>
              {product && product.title && product.title.length > 50
                ? `${product.title.substr(0, 50)}...`
                : product.title}
            </p>
            <img className={styles.zoom} src={product?.image} alt='' />
          </span>
        </Link>
      </span>
    </div>
  );
};

export default Product;

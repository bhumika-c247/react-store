import { Link } from 'react-router-dom';
import styles from '../Home/Product/product.module.scss';
// import Elecronic from '/img/categories/electronic-gadgets.jpeg';
// import Jewelery from '/img/categories/electronic-gadgets.jpeg';
// import Men from '/img/categories/electronic-gadgets.jpeg';
// import Women from '/img/categories/electronic-gadgets.jpeg';

const Category = ({ category }) => {
  console.log('category----------------', category);
  return (
    <span className={`${styles.card} p-10 m-20 text-center`}>
      <Link to={`/products/category/${category}`}>
        <span>
          <p className='category-text'>{category}</p>
          <img
            className='zoom'
            src={
              category === 'electronics'
                ? '/img/categories/electronic-gadgets.jpeg'
                : category === 'jewelery'
                ? '/img/categories/jewellery.jpg'
                : category === "men's clothing"
                ? '/img/categories/Men_s_clothes_1200x1200.jpg'
                : '/img/categories/women1.jpg'
            }
            alt=''
          />
        </span>
      </Link>
    </span>
  );
};

export default Category;

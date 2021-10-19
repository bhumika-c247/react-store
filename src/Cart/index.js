import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../DefaultLayout/Header';
import Sidebar from '../DefaultLayout/Sidebar';
import styles from '../Home/Product/product.module.scss';

let temp = [];
const Cart = () => {
  let userId = localStorage.getItem('id');
  const [isLoading, setIsLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const getcartDeails = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`/carts/${userId}`);
      if (data.products && data.products.length) {
        data.products.map(async (item) => {
          const { data: productData } = await axios.get(
            `products/${item.productId}`
          );
          temp.push({ productData });
          setAllProducts(temp);
        });
        console.log('temp uppppppppp=-------------', temp);
      }
      console.log('tempooooooooooooooooooo', temp);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getcartDeails();
    // eslint-disable-next-line
  }, []);
  console.log(
    'allProductsallProductsallProductsallProductsallProductsallProductsallProductsallProductsallProducts',
    allProducts
  );
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
              {allProducts && allProducts.length > 0
                ? allProducts.map((item, index) => {
                    let product = item.productData;
                    return (
                      <div className={`${styles.row} `} key={index}>
                        <span className={`${styles.column} `}>
                          <Link to={`/products/${product?.id}`}>
                            <span>
                              <p className={styles.product_text}>
                                {product &&
                                product.title &&
                                product.title.length > 50
                                  ? `${product.title.substr(0, 50)}...`
                                  : product.title}
                              </p>
                              <img
                                className={styles.zoom}
                                src={product?.image}
                                alt=''
                              />
                            </span>
                          </Link>
                        </span>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Cart;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '.';
import Header from '../../DefaultLayout/Header';
import Sidebar from '../../DefaultLayout/Sidebar';

const AllProducts = () => {
  const [products, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get('/products');
      setProduct(data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <Header />
      <Sidebar />
      {isLoading ? (
        <>
          <i className='loader fa fa-spinner fa-spin' />
        </>
      ) : (
        <>
          <div className='main'>
            <h2 className='category-container text-center'>All Products</h2>
            <div className='m-40 p-30'>
              {products.map((product, index) => (
                <Product key={index} product={product} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AllProducts;

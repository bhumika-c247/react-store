import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../DefaultLayout/Header';
import Sidebar from '../DefaultLayout/Sidebar';
import Category from '../ProductCategory';
// import Product from './Product';

const Home = () => {
  const [products, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [jewelery, setJewelery] = useState([]);
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
  const getJewelery = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get('/products/category/jewelery');
      setJewelery(data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  const getCategory = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get('/products/categories');
      setCategory(data.sort((a, b) => a - b).reverse());
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
    getJewelery();
    getCategory();
  }, []);
  console.log('categorycategorycategorycategorycategorycategory', category);
  console.log(
    'jeweleryjeweleryjeweleryjeweleryjeweleryjeweleryjeweleryjeweleryjeweleryjeweleryjeweleryjewelery',
    jewelery,
    products
  );
  console.log(
    'category.sort((a, b) => a - b).reverse()----------------------------',
    category.sort((a, b) => a - b).reverse()
  );
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Header />
          <Sidebar />
          <div className='main'>
            <h2 className='category-container text-center'>Categories</h2>
            {category.map((category, index) => (
              <Category key={index} category={category} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;

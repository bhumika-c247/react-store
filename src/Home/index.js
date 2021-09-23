import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Category from '../ProductCategory';
import Product from './Product';

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
      setCategory(data);
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
    jewelery
  );
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        category.map((category, index) => (
          <Category key={index} category={category} />
        ))

        // products.map((product) => (
        //   <Product key={product.id} product={product} />
        // ))
      )}
    </>
  );
};

export default Home;

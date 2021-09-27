import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../DefaultLayout/Header';
import Sidebar from '../DefaultLayout/Sidebar';
import Category from '../ProductCategory';

const Home = () => {
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    getCategory();
  }, []);
  return (
    <>
      <Header />
      <Sidebar />
      {isLoading ? (
        <i className='loader fa fa-spinner fa-spin' />
      ) : (
        <>
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

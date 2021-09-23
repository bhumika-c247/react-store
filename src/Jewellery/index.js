import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import Product from './Product';

const Jewellery = () => {
  const { type } = useParams();
  const [products, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`/products/category/${type}`);
      setProduct(data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    console.log('jewelery page---------');
    getProducts();
    // eslint-disable-next-line
  }, []);
  console.log('data ---------', products);
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        products.map((product, index) => {
          return (
            <>
              <h4>{product?.category}</h4>
              <h4>{product?.title}</h4>
              <p>{product?.description}</p>
              <p>{product?.price}</p>
              <img
                src={product?.image}
                width='400px'
                height='300px'
                alt='product'
              />
            </>
          );
        })
      )}
    </>
  );
};

export default Jewellery;

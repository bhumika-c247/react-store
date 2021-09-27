import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../DefaultLayout/Header';
import Sidebar from '../DefaultLayout/Sidebar';
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
  return (
    <>
      <Header />
      <Sidebar />
      {isLoading ? (
        <i className='loader fa fa-spinner fa-spin' />
      ) : (
        <div className='m-100'>
          <p className='category-container text-center'>{type}</p>
          {products.map((product, index) => {
            let rating = Math.floor(product?.rating?.rate);
            return (
              <div key={index}>
                <h4>{product?.title}</h4>
                <img
                  src={product?.image}
                  width='200px'
                  height='200px'
                  alt='product'
                />
                {console.log('data ---------', product)}
                <p>{product?.description}</p>
                <p>${product?.price}</p>
                <p>
                  {console.log('rating------', rating)}
                  {rating === 1 ? (
                    <span class='fa fa-star checked' />
                  ) : rating === 2 ? (
                    <>
                      {' '}
                      <span class='fa fa-star checked' />
                      <span class='fa fa-star checked' />
                    </>
                  ) : rating === 3 ? (
                    <>
                      {' '}
                      <span class='fa fa-star checked' />
                      <span class='fa fa-star checked' />
                      <span class='fa fa-star checked' />
                    </>
                  ) : rating === 4 ? (
                    <>
                      {' '}
                      <span class='fa fa-star checked' />
                      <span class='fa fa-star checked' />
                      <span class='fa fa-star checked' />
                      <span class='fa fa-star checked' />{' '}
                    </>
                  ) : (
                    <>
                      {' '}
                      <span class='fa fa-star checked' />
                      <span class='fa fa-star checked' />
                      <span class='fa fa-star checked' />
                      <span class='fa fa-star checked' />
                      <span class='fa fa-star checked' />{' '}
                    </>
                  )}
                </p>

                <p className='m-40'></p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Jewellery;

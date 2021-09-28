import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../DefaultLayout/Header';
import Sidebar from '../DefaultLayout/Sidebar';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getProductDetails = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductDetails();
    // eslint-disable-next-line
  }, []);
  console.log('product details', product);
  let rating = Math.floor(product?.rating?.rate);
  return (
    <>
      <Header />
      <Sidebar />
      {isLoading ? (
        <i className='loader fa fa-spinner fa-spin' />
      ) : (
        <div className='main'>
          <h2 className='category-container text-center'>
            {product?.category}
          </h2>
          {/* <h4>{product?.category}</h4> */}
          <div className='m-40 p-30'>
            <h4>{product?.title}</h4>
            <img
              src={product?.image}
              width='250px'
              height='250px'
              alt='product'
            />
            <p>{product?.description}</p>
            <p>${product?.price}</p>
            <p>
              {console.log('rating------', rating)}
              {rating === 1 ? (
                <span className='fa fa-star checked' />
              ) : rating === 2 ? (
                <>
                  {' '}
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star checked' />
                </>
              ) : rating === 3 ? (
                <>
                  {' '}
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star checked' />
                </>
              ) : rating === 4 ? (
                <>
                  {' '}
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star checked' />{' '}
                </>
              ) : (
                <>
                  {' '}
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star checked' />{' '}
                </>
              )}
            </p>
          </div>
        </div>
      )}
      ;
    </>
  );
};

export default ProductDetails;

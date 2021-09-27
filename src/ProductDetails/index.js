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
  console.log('product details');
  return (
    <>
      <Header />
      <Sidebar />
      {isLoading ? (
        <i className='loader fa fa-spinner fa-spin' />
      ) : (
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
      )}
      ;
    </>
  );
};

export default ProductDetails;

import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [product, setProduct] = useState(state || null); // fallback if no state

  useEffect(() => {
    if (!state) {
      // If navigated directly, fetch product by ID
      axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
        setProduct(res.data);
      });
    }
  }, [id, state]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className='product-detail'>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="200" />
      <p>{product.category}</p>
      <p>${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;

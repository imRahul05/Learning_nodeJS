
import { useNavigate } from 'react-router-dom';
import './App.css';

const ProductCard = ({ product }) => {
 const navigate = useNavigate();
  
  const Card = ({ product }) => {
    function handleDetail(){
    navigate(`/product/${product.id}`,{ state: product })

  }
    return (
      <div className="product-card" onClick={handleDetail}>
        <div>
          <img src={product.image} alt={product.title} />
        </div>
        <p>{product.category}</p>
        <p className={product.price<100?'product-price':'product-price-price-high'}>${product.price}</p>
      </div>
    );
  };

  return (
    <div className="product-list">
      {product.map((product, idx) => (
        <Card key={idx} product={product}/>
      ))}
    </div>
  );
};

export default ProductCard;

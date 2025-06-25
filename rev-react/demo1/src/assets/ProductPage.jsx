import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/Productcard";

const ProductPage = () => {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState("");
    const [isLoading,setIsLoading] = useState(true)

  async function fetchData() {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
    setIsLoading(false)
  }, []);

  function handleFilterChange(e){
     const val = e.target.value
     console.log(val)
     setCategory(val)
  }
     function getFilteredData(){
    if(!category)
        return data

    const filteredData = data.filter((product)=>product.category===category)
    return filteredData
  }
   return (
    <>
    
      {/* <select value={category} onChange={handleFilterChange}>
        <option>select category</option>
        <option value="men's clothing">men's</option>
        <option value="women's clothing">Women's</option>
        <option value="electronics">electronic</option>
        <option value="jewelery">jewelery</option>
      </select>

      <p>selectedCategory:{category||'All'}</p> */}
      <div>
        
      {isLoading ? <h1>Loading....</h1> :  <ProductCard product={data} />}
      
      </div>
    </>
  );
};

export default ProductPage;

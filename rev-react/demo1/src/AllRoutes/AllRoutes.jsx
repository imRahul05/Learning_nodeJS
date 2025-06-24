import { Routes, Route } from 'react-router-dom';
import ProductPage from '../assets/ProductPage';
import ProductDetail from '../ProductDetail';


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductPage/>} />
            <Route path="/product/:id" element={<ProductDetail/>}/>
        </Routes>
    );
};

export default AllRoutes;
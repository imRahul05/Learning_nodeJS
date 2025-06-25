import { Routes, Route } from 'react-router-dom';
import ProductPage from '../assets/ProductPage';
import ProductDetail from '../Pages/ProductDetail';
import Login from '../Pages/Login';


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<ProductPage/>} />
            <Route path="/product/:id" element={<ProductDetail/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    );
};

export default AllRoutes;
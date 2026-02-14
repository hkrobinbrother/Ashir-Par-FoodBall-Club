import Navbar from '../Components/Common/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Common/Footer/Footer';

const MainLayOut = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet/>
           <Footer></Footer>
        </div>
    );
};

export default MainLayOut;
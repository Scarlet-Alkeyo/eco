import './index.css';
import { CiSearch } from "react-icons/ci";
import { RiDislikeLine } from "react-icons/ri";
import { IoBasketOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";






const Navbar = ()=>{
    return(
        
        <div className='navbar'>
           
            <a href="home">Home</a>
            <a href="Prouct">Products</a>
            <a href="Categories">Categories</a>
            <a href="about">About</a>
            <a href="Contact">Contact us</a>
            <a href="Blog">Blog</a>
           
            <div id='icons'>
            <CiSearch />
            <RiDislikeLine />
            <IoBasketOutline />
            <IoCallOutline />

            </div>
       
        </div>




        
    );

};

export default Navbar;
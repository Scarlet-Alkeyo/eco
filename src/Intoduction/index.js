import './index.css'
import { FaXTwitter } from "react-icons/fa6";
import { RiFacebookLine } from "react-icons/ri";
import { CiYoutube } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";





const Introduction= ()=>{
    return(
        
      <div className='introduction'>

<div >
        
        Follow us
        <CiYoutube />
        <FaXTwitter />
        <RiFacebookLine />
      </div>

      <div>
        <p>Sign up get 20% off for all collection</p>
      </div>

      <div>
      <IoCallOutline />
      1(100)234-5678

      </div>

      </div>
        




        
    );

};

export default Introduction;



import './index.css';
import bed1 from '../Landing/bed1.png';
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";



const  Landing = ()=>{
    return (
        <div id='landingcontent'>
            <div id='content'>
            <h1> Modern Interior</h1>
            <h1>Design Studio</h1>
            <p>Choosing the right furniture for  your home online will add</p>
            <p>elegance and fuctionality to your interior while also</p>
            <p>bieng cost effective and long lasting</p>
            <button id='shopnow'>Shop now</button>
                <p>Follow instagragm</p>
            </div>
            
            <div id='landingimage'>
               <img src={bed1} alt='bed1'/> 
            </div> 

            <div id='price'>
                <div>
                    2500+
                    unique style
                </div>

                <div>
                    5000+
                    Happy Cutomer
                </div>
                <div>
                    300+
                    Certified
                </div>
                <div>
                <IoMdArrowForward />                    
                </div>
                <div>
                <IoArrowBack />
                </div>
            </div>  
        </div>

        
    )


}
export default Landing;
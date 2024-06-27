import { getProduct } from "../utils";

import { useEffect, useState } from "react";


export const useProduct = () =>{
    const [users,setUsers] = useState([]);


    const [error, setError] = useState('');
    const [loading ,setloading]= useState(false);
    useEffect(()=>{
        const fetchUsers = async()=>{
            try{
                setloading(true);
                const result = await getProduct();
                
                // console.log({result});

                setUsers(result);
                setloading(false);
            }catch (error){
                setError(`Error:${error.message}`)
                setloading(false);

            }
        };
        fetchProducts();
    }, []);
    return {products,error,loading}
    
};

export const getProduct  = async()=> {
    try{
       const response= await fetch ('https://fakestoreapi.com/products')

       return response.json()
    }

    catch(error){
        return `Error during login:${error.message}`
    }
}
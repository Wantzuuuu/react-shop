
const products = [] ;

export default function product(prevState = products, action){
    const {type , data} = action ;
    
    switch(type){
        case "getProduct" : 
        return data

        default :
            return prevState
    }
}
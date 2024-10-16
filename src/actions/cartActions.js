
export const addtoCart=(item)=>({
    type:'ADD_TO_CART',
    payload:item
    
    
});

const removefromCart=(item)=>({
    type:'REMOVE_FROM_CART',
    payload:item
})

const incrementCartCounter=()=>({
    type:'INCREMENT_CART_COUNTER'
})

 const decrementCartCounter=()=>({
    type:'DECREMENT_CART_COUNTER'

})
export default {addtoCart,removefromCart,incrementCartCounter,decrementCartCounter} 
 


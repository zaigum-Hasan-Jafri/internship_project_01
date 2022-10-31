import { useContext } from "react";
import { createContext, useReducer } from "react";


const Cart = createContext();
const cartReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1, inStock: 15 }] }
        case "REMOVE_FROM_CART":
            return {
                ...state, cart: state.cart.filter(c => c._id !== action.payload._id)
            }
        case "CART_QTY":
            return {
                ...state, cart: state.cart.filter(c => c._id === action.payload._id ?(c.qty = action.payload.qty) : c.qty)
            }

        default:
            return { state }
    }
};

export const Context = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        cart: [],
    })

    // const [qty, setQty] = useState(1)
    // const handleIncQty = (item) => {
    //     item.qty += 1;
    // }
    // const handleDecQty = (item) => {
    //     item.qty == 0 ?
    //         dispatch({ type: "REMOVE_FROM_CART", payload: item }) : item.qty -= 1;
    // }

    return <Cart.Provider value={{ state, dispatch }}>
        {children}
    </Cart.Provider>
}

export const CartState = () => {
    return useContext(Cart);
} 
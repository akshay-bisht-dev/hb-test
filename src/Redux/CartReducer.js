const { createSlice } = require("@reduxjs/toolkit");

const CartReducer = createSlice({
    name:"cart",
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
    },
})

export const {add} = CartReducer.actions;
export default CartReducer.reducer;
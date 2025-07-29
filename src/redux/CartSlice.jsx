import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		addItemToCart(state, action) {
			const newItem = action.payload;
			const existingItem = state.items.find((item) => item.id === newItem.id);

			if (existingItem) {
				existingItem.quantity++;
			} else {
				state.items.push({
					id: newItem.id,
					title: newItem.title,
					image: newItem.images[0],
					price: newItem.price,
					quantity: 1,
				});
			}
		},

		removeItemFromCart(state, action) {
			const itemId = action.payload.id;
			const existingItem = state.items.find((item) => item.id === itemId);

			if (existingItem.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== itemId);
			} else {
				existingItem.quantity--;
			}
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice;

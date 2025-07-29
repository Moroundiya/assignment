import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
	name: "product",
	initialState: {
		status: "idle",
		data: [],
		error: null,
	},
	reducers: {
		fetchProductsStart(state) {
			state.status = true;
			state.error = null;
		},
		fetchProductsSuccess(state, action) {
			state.data = action.payload;
			state.loading = false;
		},
		fetchProductsFailure(state, action) {
			state.status = false;
			state.error = action.payload;
		},
	},
});

export const productAction = productSlice.actions;
export default productSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
	name: "product",
	initialState: {
		status: "idle",
		data: [],
		filterData: [],
		error: null,
	},
	reducers: {
		fetchProductsStart(state) {
			state.status = true;
			state.error = null;
		},
		fetchProductsSuccess(state, action) {
			state.data = action.payload;
			state.filterData = action.payload;
			state.status = false;
		},
		fetchProductsFailure(state, action) {
			state.status = false;
			state.error = action.payload;
		},

		searchProduct(state, action) {
			const searchQuery = action.payload.toLowerCase();
			if (!searchQuery.trim()) {
				state.data = state.filterData;
			} else {
				state.data = state.filterData.filter((item) =>
					item.title.toLowerCase().includes(searchQuery)
				);
			}
		},
	},
});

export const productAction = productSlice.actions;
export default productSlice;

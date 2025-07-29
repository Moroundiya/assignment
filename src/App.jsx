import { createBrowserRouter, RouterProvider } from "react-router";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Products />,
		},
		{
			path: "/:id",
			element: <ProductDetails />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;

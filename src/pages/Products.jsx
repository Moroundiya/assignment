import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { Cart } from "../components/Cart";
import axios from "axios";
import { ProductCard } from "../components/ProductCard";
import { Skeleton } from "../components/Skeleton";
import { useDispatch, useSelector } from "react-redux";

export const Products = () => {
	const [search, setSearch] = useState(false);
	const [showCart, setShowCart] = useState(false);
	const [products, setProducts] = useState([]);
	const items  = useSelector((state) => state.cart.items);

	const fetchProducts = async () => {
		await axios
			.get("https://dummyjson.com/products")
			.then((res) => {
				setProducts(res.data.products);
			})
			.catch((err) => {
				console.error("Error fetching products:", err);
			});
	};
	useEffect(() => {
		fetchProducts();
	}, []);

	useEffect(() => {
		console.log(items);
	}, [items]);

	return (
		<>
			<Cart
				showCart={showCart}
				setShowCart={setShowCart}
				cartItems={items}
			/>
			<div
				className={`bg-white border border-[#7A9E7E] z-10 shadow-md rounded-md w-11/12 mx-auto lg:w-[300px] py-2 lg:py-1.5 px-2.5 absolute left-3 lg:left-20 ${
					search ? "top-[70px]" : "-top-[100px]"
				} transition-all duration-1000 ease-in-out`}>
				<input
					type="search"
					className="w-full h-full outline-none "
				/>
			</div>
			<nav className="bg-[#7A9E7E] py-4 px-3 text-white fixed z-30 w-full top-0 left-0 flex justify-between items-center lg:px-20">
				<Icon
					icon={`${search ? "iconoir:cancel" : "mingcute:search-line"}`}
					className="text-2xl transition-all duration-500 cursor-pointer ease-in-out"
					onClick={() => setSearch(!search)}
				/>
				<h1 className="text-2xl font-bold uppercase">Products</h1>

				<div
					className="relative cursor-pointer"
					onClick={() => setShowCart(true)}>
					<div className="w-5 h-5 bg-orange-500 text-white pointer-events-none text-[10px] font-semibold rounded-full absolute -top-2 -right-2 flex justify-center items-center">
						{items ? items.length : 0}
					</div>
					<Icon
						icon="grommet-icons:cart"
						className="text-2xl"
					/>
				</div>
			</nav>

			<div className="gap-6 px-5 pt-20 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-10 lg:mt-10 lg:grid-cols-4 lg:px-20">
				{products.length < 1 ? (
					<Skeleton />
				) : (
					products.map((product) => (
						<ProductCard
							key={product.id}
							image={product.images[0]}
							price={product.price}
							title={product.title}
							category={product.category}
							availabilityStatus={product.availabilityStatus}
							product={product}
						/>
					))
				)}
			</div>
		</>
	);
};

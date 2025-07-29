import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router";
import productImg from "../assets/test-img.webp";
import { useState } from "react";
import { Cart } from "../components/Cart";

export const Products = () => {
	const [search, setSearch] = useState(false);
	const [showCart, setShowCart] = useState(false);

	return (
		<>
			<Cart
				showCart={showCart}
				setShowCart={setShowCart}
			/>
			<div
				className={`bg-white border border-[#7A9E7E] z-10 shadow-md rounded-md w-11/12 mx-auto lg:w-[300px] py-2 lg:py-1.5 px-2.5 absolute left-3 lg:left-12 ${
					search ? "top-[70px]" : "-top-[100px]"
				} transition-all duration-1000 ease-in-out`}>
				<input
					type="search"
					className="w-full h-full outline-none "
				/>
			</div>
			<nav className="bg-[#7A9E7E] py-4 px-3 text-black fixed z-30 w-full top-0 left-0 flex justify-between items-center lg:px-12">
				<Icon
					icon={`${search ? "iconoir:cancel" : "mingcute:search-line"}`}
					className="text-2xl transition-all duration-500 cursor-pointer ease-in-out"
					onClick={() => setSearch(!search)}
				/>
				<h1 className="text-2xl font-bold uppercase">Products</h1>

				<div
					className="relative cursor-pointer"
					onClick={() => setShowCart(true)}>
					<div className="w-5 h-5 bg-orange-500 text-white text-[11px] rounded-full absolute -top-2 -right-2 flex justify-center items-center">
						20
					</div>
					<Icon
						icon="grommet-icons:cart"
						className="text-2xl"
					/>
				</div>
			</nav>

			<div className="mt-6 gap-6 px-3 pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:mt-10 lg:grid-cols-4 xl:grid-cols-5 lg:px-12">
				<div className="bg-white rounded-[20px] shadow-lg p-1.5 lg:p-4 flex justify-center items-center flex-col cursor-pointer">
					<div className="w-full bg-[#F7F7F7] rounded-[20px] flex justify-center items-center cursor-pointer group relative z-0">
						<p className="bg-[#7A9E7E] text-white px-2.5 lg:px-3 rounded-md py-0.5 text-[10px] lg:text-[12px] absolute top-3 left-3 font-light">
							In Stock
						</p>
						<img
							src={productImg}
							className="w-3/4 lg:w-auto pointer-events-none transition-all ease-in-out duration-700 group-hover:scale-125"
							alt="Product-image"
						/>
					</div>
					<div className="mt-4 flex flex-col justify-center items-center">
						<p className="text-[#54595F] text-sm lg:text-md font-light mb-1 lg:mb-2">
							Skincare
						</p>
						<p className="font-semibold text-[1.05rem] lg:text-xl">PRODUCT 1</p>
						<p className="text-[#54595F] lg:my-2 text-md lg:text-lg">$10</p>
						<Link
							to="/1"
							className={`text-[0.7rem] lg:text-[0.85rem] bg-[#6a8d6a] xl:text-[0.9rem] flex justify-center items-center my-4 lg:mt-3 lg:mb-4  text-white px-2.5 py-1.5 lg:px-4 lg:py-2  rounded-full hover:text-white transition-all duration-500 hover:bg-[#7A9E7E]`}>
							<span className="me-1 lg:me-2 ps-1">Add to Cart</span>
							<Icon
								icon="icons8:add-shopping-cart"
								className="text-xl lg:text-3xl"
							/>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

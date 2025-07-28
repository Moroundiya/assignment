import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router";
import productImg from "../assets/test-img.webp";

export const Products = () => {
	return (
		<>
			<nav className="bg-[#7A9E7E] p-4 text-black flex justify-between items-center">
				<Icon
					icon="mingcute:search-line"
					className="text-2xl"
				/>
				<h1 className="text-2xl font-bold uppercase">Products</h1>
				<Icon
					icon="grommet-icons:cart"
					className="text-2xl"
				/>
			</nav>

			<div className="mt-6 gap-6 px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:mt-10 lg:grid-cols-4 xl:grid-cols-5 lg:px-12">
				<div className="bg-white rounded-[20px] shadow-lg p-1.5 lg:p-4 flex justify-center items-center flex-col cursor-pointer">
					<div className='w-full bg-[#F7F7F7] rounded-[20px] flex justify-center items-center overflow-hidden relative cursor-pointer group after:content-[""] after:w-full after:h-full after:bg-[d#017d0346] after:absolute after:top-0 after:left-0'>
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
							className={`text-[0.7rem] lg:text-[0.85rem]pointer-events-auto bg-[#7A9E7E] xl:text-[0.9rem] flex justify-center items-center my-4 lg:mt-3 lg:mb-4  text-white px-2.5 py-1.5 lg:px-4 lg:py-2  rounded-full hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]`}>
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

import { Icon } from "@iconify/react/dist/iconify.js";

export const Cart = ({ showCart, setShowCart }) => {
	return (
		<div
			className={`w-full h-full bg-[#000b00c9] fixed z-50 top-0 transition-all ease-in-out overflow-hidden ${
				showCart
					? "left-0 opacity-100 duration-[0.8s]"
					: "left-full opacity-0 delay-300 duration-[1s]"
			} flex justify-end`}>
			<div
				className={`w-10/12 lg:w-[440px] h-full bg-white px-5 lg:px-7 pb-5 relative transition-all ease-in-out overflow-x-hidden ${
					showCart
						? "left-0 opacity-100 delay-100 duration-[1s]"
						: "left-full opacity-0 duration-[0.8s]"
				} `}>
				<span>
					<Icon
						icon="material-symbols-light:cancel-outline-rounded"
						className="absolute right-5 top-5 text-4xl cursor-pointer text-red-700"
						onClick={() => setShowCart(false)}
					/>
				</span>
				<p className="text-xl font-bold pt-14 lg:text-[1.45rem]">Cart</p>
				<div className="w-full h-[2px] mt-2 bg-[#D9D9D9] rounded-3xl overflow-hidden">
					<div className="h-full w-[50px] bg-[#7A9E7E]"></div>
				</div>
				<div className="mt-8 mb-5 h-[70%] md:h-[700px] lg:h-[70%] overflow-y-auto overflow-x-hidden">
					{/* {storeCart[0] == undefined ? (
                        <p
                            className="my-10 text-sm text-gray-500"
                            variants={bounceUp}
                            initial="hidden"
                            whileInView="visible">
                            Cart is empty, please go to shop and add item(s)
                        </p>
                    ) : (
                        storeCart.map((prod, i) => {
                            return (
                                <CartSlideoutItem
                                    key={i}
                                    {...prod}
                                    index={i}
                                    remProd={remProd}
                                />
                            );
                        })
                    )} */}
				</div>
			</div>
		</div>
	);
};

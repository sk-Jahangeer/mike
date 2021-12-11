import { useState } from "react";
import { useMediaQuery, Button, IconButton } from "@mui/material";
import Color from "../Color";
import Select from "../Select";
import Quantity from "../Quantity";
import triangle from "../../images/Triangle.svg";
import rating from "../../images/Raiting.svg";
import whiteCart from "../../images/Mobile/Cart.svg";
import mobileLike from "../../images/Mobile/Like.svg";
import webLike from "../../images/Web/Like.svg";
import shoeSmall from "../../images/Mobile/ShoeSmall.png";
import styles from "./styles.module.scss";

const sizeOptions = [12, 28, 38, 48];
const colorOptions = ["#000000", "#ff0000", "#7A3050"];

const Product = () => {
	const [size, setSize] = useState(48);
	const [color, setColor] = useState("#000000");
	const [quantity, setQuantity] = useState(1);
	const isMobile = useMediaQuery("(max-width:600px)");

	return (
		<div className={styles.product_container}>
			<div className={styles.product_category}>
				<p>Man</p>
				<img src={triangle} alt="triangle" />
				<p>Shoes</p>
				<img src={triangle} alt="triangle" />
				<p>Gray Running Sneakers</p>
			</div>
			<h1 className={styles.product_name}>Black Running Sneakers</h1>
			{isMobile && (
				<div className={styles.product_img}>
					<img src={shoeSmall} alt="shoe small" />
				</div>
			)}
			<div className={styles.product_rating}>
				<img src={rating} alt="rating" />
				<span>18 Votes</span>
			</div>
			<h1 className={styles.product_price}>
				₹16,959.99 <span>₹20,069.99</span>
			</h1>
			<p className={styles.product_description}>
				Neoprene and membrane boots. Rubber insert with lacing over foot and
				back on heel. Lining and insole of the membrane
			</p>
			<div className={styles.options_container}>
				<Color
					label="Color"
					colors={colorOptions}
					value={color}
					handleInputState={(value) => setColor(value)}
				/>
				<Select
					label="Size"
					value={size}
					options={sizeOptions}
					handleInputState={(value) => setSize(value)}
				/>
				<Quantity
					label="Quantity"
					value={quantity}
					handleInputState={(value) => setQuantity(value)}
				/>
			</div>
			<div className={styles.product_btns}>
				<Button className={styles.add_to_cart_btn}>
					<img src={whiteCart} alt="white_cart" />
					Add to Cart
				</Button>
				<div className={styles.watchlist}>
					<IconButton className={styles.like_btn}>
						<img src={isMobile ? mobileLike : webLike} alt="watchlist" />
					</IconButton>
					<p>Save to Wishlist</p>
				</div>
			</div>
			<p className={styles.delivery_info}>
				Standard delivery in 2-4 days or Premium delivery in 2-4 hours
			</p>
		</div>
	);
};

export default Product;

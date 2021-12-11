import { IconButton, useMediaQuery } from "@mui/material";
import search from "../../images/Web/Search.svg";
import whiteSearch from "../../images/Mobile/Search.svg";
import blackCart from "../../images/Web/Cart.svg";
import whiteCart from "../../images/Mobile/Cart.svg";
import blackMenu from "../../images/Web/MenuHamburger.svg";
import whiteMenu from "../../images/Mobile/MenuHamburger.svg";
import styles from "./styles.module.scss";

const Navbar = () => {
	const isMobile = useMediaQuery("(max-width:600px)");

	return (
		<div className={styles.navbar}>
			<div className={styles.left}>
				<h1>MIKE</h1>
			</div>
			<div className={styles.right}>
				{isMobile ? (
					<IconButton>
						<img src={whiteSearch} alt="search_icon" />
					</IconButton>
				) : (
					<div className={styles.search_bar}>
						<input type="text" placeholder="Search" />
						<IconButton className={styles.search_icon}>
							<img src={search} alt="search_icon" />
						</IconButton>
					</div>
				)}
				<div className={styles.cart_icon}>
					<img src={isMobile ? whiteCart : blackCart} alt="cart" />
					<p>0</p>
				</div>
				<IconButton className={styles.menu_icon}>
					<img src={isMobile ? whiteMenu : blackMenu} alt="menu_hamburger" />
				</IconButton>
			</div>
		</div>
	);
};

export default Navbar;

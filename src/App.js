import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { IconButton } from "@mui/material";
import shoeLarge from "./images/Web/ShoeLarge.png";
import facebook from "./images/Web/Facebook.svg";
import twitter from "./images/Web/Twitter.svg";
import instagram from "./images/Web/Instagram.svg";
import "./App.scss";

function App() {
	return (
		<main>
			<Navbar />
			<div className="container">
				<div className="left">
					<img src={shoeLarge} className="product_img" alt="shoe_large" />
					<div className="gradiant_background">
						<div className="social_media">
							<IconButton className="icon_btn">
								<img src={facebook} alt="facebook" />
							</IconButton>
							<IconButton className="icon_btn">
								<img src={twitter} alt="twitter" />
							</IconButton>
							<IconButton className="icon_btn">
								<img src={instagram} alt="instagram" />
							</IconButton>
						</div>
					</div>
				</div>
				<div className="right">
					<Product />
				</div>
			</div>
		</main>
	);
}

export default App;

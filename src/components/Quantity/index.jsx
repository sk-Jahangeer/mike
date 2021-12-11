import { IconButton } from "@mui/material";
import styles from "./styles.module.scss";

const Quantity = ({ label, value, handleInputState }) => {
	return (
		<div className={styles.quantity_container}>
			<p className={styles.label}>{label}</p>
			<div className={styles.quantity}>
				<IconButton
					className={styles.icon_btn}
					onClick={() => {
						value > 1 && handleInputState(value - 1);
					}}
				>
					&#8722;
				</IconButton>
				<p>{value}</p>
				<IconButton
					className={styles.icon_btn}
					onClick={() => handleInputState(value + 1)}
				>
					&#43;
				</IconButton>
			</div>
		</div>
	);
};

export default Quantity;

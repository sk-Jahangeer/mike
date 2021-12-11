import { Fragment } from "react";
import { IconButton } from "@mui/material";
import styles from "./styles.module.scss";

const Color = ({ label, colors, value, handleInputState }) => {
	return (
		<div className={styles.color_container}>
			<p className={styles.label}>{label}</p>
			<div className={styles.color_select}>
				{colors.map((color, index) => (
					<IconButton
						className={styles.color_btn}
						key={index}
						style={{ background: color }}
						onClick={() => handleInputState(color)}
					>
						{value === color && <Fragment>&#10004;</Fragment>}
					</IconButton>
				))}
			</div>
		</div>
	);
};

export default Color;

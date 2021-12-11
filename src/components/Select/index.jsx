import { useState } from "react";
import { IconButton, ClickAwayListener } from "@mui/material";
import arrow from "../../images/Arrow.svg";
import styles from "./styles.module.scss";

const Select = ({ label, options, value, handleInputState }) => {
	const [menu, setMenu] = useState(false);

	const handleChange = (option) => {
		setMenu(false);
		handleInputState(option);
	};

	return (
		<div className={styles.select_container}>
			<p className={styles.label}>{label}</p>
			<div className={styles.select}>
				<p>{value}</p>
				<IconButton className={styles.arrow_btn} onClick={() => setMenu(!menu)}>
					{menu ? (
						<img
							src={arrow}
							alt="arrow"
							style={{ transform: "rotate(180deg)" }}
						/>
					) : (
						<img src={arrow} alt="arrow" />
					)}
				</IconButton>
			</div>
			{menu && (
				<ClickAwayListener onClickAway={() => setMenu(false)}>
					<div className={styles.options_container}>
						{options.map((option) => (
							<p
								key={option}
								onClick={() => handleChange(option)}
								className={option === value ? styles.active : ""}
							>
								{option}
							</p>
						))}
					</div>
				</ClickAwayListener>
			)}
		</div>
	);
};

export default Select;

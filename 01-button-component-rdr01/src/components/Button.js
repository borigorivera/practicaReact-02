import React from "react";

import styles from "./Button.module.css";

const Button = ({
	label,
	variant,
	disableShadow,
	disabled,
	startIcon,
	endIcon,
	color,
	size,
}) => {
	console.log(`esto ${disableShadow}`);
	return (
		<div className={styles.container}>
			<label className={styles.label} htmlFor="">
				{label}
			</label>
			<button
				disabled={disabled}
				className={`${styles.button} ${
					variant ? styles[variant] : ""
				} ${disableShadow ? styles.disableShadow : ""} ${
					disabled ? styles.disabled : ""
				} ${color ? styles[color] : ""} ${size ? styles[size] : ""}`}
			>
				{startIcon} Default {endIcon}
			</button>
		</div>
	);
};

export default Button;

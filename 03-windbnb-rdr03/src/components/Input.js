import React from "react";

import styles from "./Input.module.css";

const Input = ({
	text,
	error,
	disabled,
	helperText,
	startIcon,
	endIcon,
	value,
	fullWidth,
	multiline,
	rows,
}) => {
	return (
		<div className={`${styles.container} ${error ? styles.error : ""} `}>
			<p className={styles.text}>{text}</p>
			<label className={styles.label} htmlFor="">
				Label
			</label>
			{multiline ? (
				<textarea
					rows={rows}
					className={`${styles.input}  ${
						fullWidth ? styles.fullWidth : ""
					} `}
				/>
			) : (
				<input
					value={value}
					disabled={disabled}
					className={`${styles.input} ${
						fullWidth ? styles.fullWidth : ""
					} `}
					type="text"
					placeholder={`${startIcon ? startIcon : ""} Placeholder ${
						endIcon ? endIcon : ""
					}`}
				/>
			)}

			{helperText && <p className={styles.helperText}>{helperText}</p>}
		</div>
	);
};

export default Input;

import React from "react";

import styles from "./Controls.module.css";

const Controls = () => {
	return (
		<form className={styles.wrapper}>
			<input
				className={styles.place}
				type="text"
				value="Helsinki, Finland"
			/>
			<input
				className={styles.guests}
				type="text"
				placeholder="Add guests"
			/>
			<button className={styles.button}>O</button>
		</form>
	);
};

export default Controls;

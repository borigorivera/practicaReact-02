import React from "react";

import Stay from "./Stay";

import styles from "./Stays.module.css";

const Stays = ({ stays }) => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.header}>
				<h2 className={styles.title}>Stays in Finland</h2>
				<p className={styles.quantity}>
					{stays.length > 12 ? "12+" : stays.length} stays
				</p>
			</div>
			{stays.map((stay) => {
				return <Stay {...stay} />;
			})}
		</section>
	);
};

export default Stays;

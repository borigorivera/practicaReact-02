import React from "react";

import styles from "./Stay.module.css";

import { HiStar } from "react-icons/hi";

const Stay = ({ title, rating, beds, type, superHost, photo }) => {
	return (
		<article className={styles.wrapper}>
			<img className={styles.image} src={photo} alt={title} />

			<div className={styles.descriptionContainer}>
				<div className={styles.detailsContainer}>
					{superHost && (
						<span className={styles.superHost}>SUPER HOST</span>
					)}
					<p className={styles.details}>
						{type} . {beds} beds
					</p>
				</div>
				<span className={styles.rating}>
					<HiStar className={styles.star} />
					{rating}
				</span>
			</div>
			<p className={styles.name}>{title}</p>
		</article>
	);
};

export default Stay;

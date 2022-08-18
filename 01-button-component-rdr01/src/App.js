import styles from "./App.module.css";

import Button from "./components/Button";

import { MdShoppingCart } from "react-icons/md";

function App() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.defaultContainer}>
				<Button label={"<Button />"} />
				<Button label={"&:hover, &:focus"} />
			</div>
			<div className={styles.defaultContainer}>
				<Button
					label={"<Button variant=”outline” />"}
					variant="outline"
				/>
				<Button label={"&:hover, &:focus"} variant="outline" />
			</div>
			<div className={styles.defaultContainer}>
				<Button label={"<Button variant=”text” />"} variant="text" />
				<Button label={"&:hover, &:focus"} variant="text" />
			</div>
			<div className={styles.defaultContainer}>
				<Button label={"<Button disableShadow />"} disableShadow />
			</div>
			<div className={styles.defaultContainer}>
				<Button label={"<Button disabled />"} disabled />
				<Button
					label={"<Button variant=”text” disabled />"}
					disabled
					variant="text"
				/>
			</div>
			<div className={styles.defaultContainer}>
				<Button
					label={"<Button startIcon=”local_grocery_store” />"}
					startIcon={<MdShoppingCart />}
					color="primary"
				/>
				<Button
					label={"<Button endIcon=”local_grocery_store” />"}
					endIcon={<MdShoppingCart />}
					color="primary"
				/>
			</div>
			<div className={styles.defaultContainer}>
				<Button
					label={"<Button size=”sm” />"}
					size="sm"
					color="primary"
				/>
				<Button
					label={"<Button size=”md” />"}
					size="md"
					color="primary"
				/>
				<Button
					label={"<Button size=”lg” />"}
					size="lg"
					color="primary"
				/>
			</div>
			<div className={styles.defaultContainer}>
				<Button label={"<Button color=”default” />"} color="default" />
				<Button label={"<Button color='primary' />"} color="primary" />
				<Button
					label={"<Button color=”secondary” />"}
					color="secondary"
				/>
				<Button label={"<Button color=”danger” />"} color="danger" />
			</div>
			<div className={styles.defaultContainer}>
				<Button label={"&:hover, &:focus"} color="default" />
				<Button label={"&:hover, &:focus"} color="primary" />
				<Button label={"&:hover, &:focus"} color="secondary" />
				<Button label={"&:hover, &:focus"} color="danger" />
			</div>
		</div>
	);
}

export default App;

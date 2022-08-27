import { useState } from "react";
import styles from "./App.module.css";

import Stays from "./components/Stays";
import Header from "./components/Header";

import data from "./stays.json";

function App() {
	const [stays, setStays] = useState(data);
	return (
		<div className={styles.wrapper}>
			<Header />
			<Stays stays={stays} />
		</div>
	);
}

export default App;

import styles from "./App.module.css";

import Input from "./components/Input";

function App() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.defaultContainer}>
				<Input text="<Input />" />
				<Input text="&:hover" />
				<Input text="&:focus" />
			</div>
			<div className={styles.defaultContainer}>
				<Input text="<Input error />" error />
				<Input text="&:hover" error />
				<Input text="&:focus" error />
			</div>
			<div className={styles.defaultContainer}>
				<Input text="<Input disabled />" disabled />
			</div>
			<div className={styles.defaultContainer}>
				<Input
					helperText="Some interesting text"
					text="<Input helperText=”Some interesting text” />"
				/>
				<Input
					helperText="Some interesting text"
					text="<Input helperText=”Some interesting text” error />"
					error
				/>
			</div>
			<div className={styles.defaultContainer}>
				<Input startIcon="O" text="<Input startIcon />" />
				<Input endIcon="O" text="<Input endIcon />" />
			</div>
			<div className={styles.defaultContainer}>
				<Input value="text" text="<Input value=”text” />" />
			</div>
			<div className={styles.defaultContainer}>
				<Input text="<Input size=”sm” />" />
				<Input text="<Input size=”md” />" />
			</div>
			<div className={styles.defaultContainer}>
				<Input fullWidth text="<Input fullWidth />" />
			</div>
			<div className={styles.defaultContainer}>
				<Input multiline rows="2" text="<Input multiline row=”4” />" />
			</div>
		</div>
	);
}

export default App;

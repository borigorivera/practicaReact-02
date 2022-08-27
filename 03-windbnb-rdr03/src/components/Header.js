import React from "react";
import logo from "../logo.png";

import Controls from "./Controls";

const Header = () => {
	return (
		<div>
			<img src={logo} alt="" />
			<Controls />
		</div>
	);
};

export default Header;

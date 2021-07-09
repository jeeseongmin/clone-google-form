import React, { useEffect } from "react";
import classNames from "classnames";
import "../App.css";

const Toggle = ({ active, setToggle }) => {
	return (
		<div
			className={classNames("toggleContainer", { active: active })}
			onClick={setToggle}
		>
			<div className="toggleBar"></div>
			<div className={classNames("toggleCircleWrapper", { active: active })}>
				<div className={classNames("toggleCircle", { active: active })}></div>
			</div>
		</div>
	);
};

export default Toggle;

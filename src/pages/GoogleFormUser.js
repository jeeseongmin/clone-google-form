import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const GoogleFormUser = () => {
	const { uuid } = useParams();
	useEffect(() => {
		fetchData(uuid);
	}, []);
	const fetchData = (uuid) => {};

	return <div></div>;
};

export default GoogleFormUser;

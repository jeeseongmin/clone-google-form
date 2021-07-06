import React from "react";
// import { Layout, Container } from "../../styles/Form";
// import { firebaseApp } from "../../firebase";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Layout, Container } from "../styles/Layout";

const Home = () => {
	const history = useHistory();

	const move = function (link) {
		history.push(link);
	};
	return (
		<Layout>
			<Container>
				<Button
					variant="contained"
					color="primary"
					onClick={() => move("/form")}
				>
					Make Form
				</Button>
				<Button
					variant="contained"
					color="secondary"
					onClick={() => move("/list")}
				>
					Form List
				</Button>
			</Container>
		</Layout>
	);
};

export default Home;

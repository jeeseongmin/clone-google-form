import React, { useState, useEffect } from "react";
// import { Layout, Container } from "../../styles/Form";
import { db, firebase, firebaseApp } from "../firebase";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Divider from "@material-ui/core/Divider";
import { Button } from "@material-ui/core";
import { Layout, Container } from "../styles/Layout";
import { FaCopy } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));
const Home = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const [formLists, setFormLists] = useState([]);

	useEffect(() => {
		let getFormList = async function () {
			try {
				const querySnapshot = await db.collection("questions").get();
				setFormLists(querySnapshot.docs.map((doc) => doc.data()));
			} catch (error) {
				console.log(error);
			}
		};
		getFormList();
	}, []);

	const handleOpen = () => {
		setOpen(true);
		console.log(formLists);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const history = useHistory();

	const move = function (link) {
		history.push(link);
	};

	const CopyUrl = function (uuid) {
		const url = "http://localhost:3000/form/" + uuid;
		alert(url);
	};
	return (
		<Layout>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<h2 id="transition-modal-title">Form List</h2>
						<p>해당 form을 복사하시려면 우측 버튼을 눌러주세요</p>
						<FormListWrapper>
							{formLists.map((element, index) => {
								return (
									<div>
										<FormList>
											<FormTitle>
												<FormTitleText>{element.title}</FormTitleText>
											</FormTitle>
											<CopyBtn>
												<FaCopy
													size={22}
													title="copy"
													onClick={() => CopyUrl(element.uuid)}
												/>
											</CopyBtn>
										</FormList>
										<Divider />
									</div>
								);
							})}
						</FormListWrapper>
					</div>
				</Fade>
			</Modal>
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
					onClick={() => handleOpen()}
				>
					Form List
				</Button>
			</Container>
		</Layout>
	);
};

export default Home;

const FormListWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	height: 20rem;
	overflow-y: auto;
`;

const FormTitle = styled.div`
	width: 90%;
	display: flex;
	align-items: center;
	padding: 0 1rem;
	font-weight: bold;
`;
const FormTitleText = styled.div`
	width: 100%;
	text-overflow: ellipsis;
	white-space: nowrap;
	word-wrap: normal;
	overflow: hidden;
`;

const FormList = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	width: 23rem;
`;

const CopyBtnBox = styled.div`
	width: 100%;
	background-color: white;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
const CopyBtn = styled.button`
	width: 3rem;
	height: 3rem;
	background-color: white;
	border-radius: 20px;
	border-style: none;
	&:hover {
		background-color: #e3e3e3;
	}
`;

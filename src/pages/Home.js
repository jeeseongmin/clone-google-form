import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Divider from "@material-ui/core/Divider";
import { Button } from "@material-ui/core";
import { Layout, Container } from "../styles/Layout";
import { AiOutlineLink } from "react-icons/ai";
import { FaCopy } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

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

	const moveLink = function (link) {
		window.open(link, "_blank");
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
								const url = "http://localhost:3000/form/" + element.uuid;
								return (
									<div>
										<FormList>
											<FormTitle>
												<FormTitleText>{element.title}</FormTitleText>
											</FormTitle>
											<CopyBtn>
												<CopyToClipboard
													text={url}
													onCopy={() => alert("copy!")}
												>
													<FaCopy size={22} title="copy" />
												</CopyToClipboard>
											</CopyBtn>
											<CopyBtn>
												<AiOutlineLink
													size={22}
													title="copy"
													onClick={() => moveLink(url)}
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
					onClick={() => history.push("/form")}
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
	width: 20rem;
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

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
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { GoListOrdered } from "react-icons/go";
import { IoWarningOutline } from "react-icons/io5";

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
	const [showList, setShowList] = useState(false);

	const [formLists, setFormLists] = useState([]);
	const [completeList, setCompleteList] = useState([]);

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
		setShowList(false);
		console.log(formLists);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const history = useHistory();

	const moveLink = function (link) {
		window.open(link, "_self");
	};

	const getCompleteList = function (qid) {
		let getCompleteList = async function () {
			try {
				const querySnapshot = await db
					.collection("answers")
					.where("uidOfQuestion", "==", qid)
					.get();
				setCompleteList(querySnapshot.docs.map((doc) => doc.data()));
				setShowList(true);
			} catch (error) {
				console.log(error);
			}
		};

		getCompleteList();
		console.log(qid);
		console.log(completeList);
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
						<FormListTopWrapper>
							{!showList && (
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
															title="link"
															onClick={() => moveLink(url)}
														/>
													</CopyBtn>
													<CopyBtn>
														<AiOutlineRight
															size={22}
															title="list"
															onClick={() => getCompleteList(element.uuid)}
														/>
													</CopyBtn>
												</FormList>
												<Divider />
											</div>
										);
									})}
								</FormListWrapper>
							)}
							{showList && (
								<FormListWrapper>
									<div>
										<FormList>
											<CopyBtn>
												<AiOutlineLeft
													size={22}
													title="back"
													onClick={() => setShowList(false)}
												/>
											</CopyBtn>
											<FormTitle>
												<FormTitleText>Form List</FormTitleText>
											</FormTitle>
										</FormList>
										<Divider />
										{}
									</div>
									{completeList.length === 0 && (
										<div>
											<FormList>
												<CopyBtn>
													<IoWarningOutline size={22} title="warning" />
												</CopyBtn>
												<FormTitle>
													<FormTitleText>등록된 응답이 없습니다.</FormTitleText>
												</FormTitle>
											</FormList>
											<Divider />
											{}
										</div>
									)}

									{completeList.map((element, index) => {
										const url = "http://localhost:3000/view/" + element.uuid;
										return (
											<div>
												<FormList>
													<FormTitle>
														<FormTitleText>응답 {index}</FormTitleText>
													</FormTitle>
													<CopyBtn>
														<AiOutlineLink
															size={22}
															title="link"
															onClick={() => moveLink(url)}
														/>
													</CopyBtn>
												</FormList>
												<Divider />
												{}
											</div>
										);
									})}
								</FormListWrapper>
							)}
						</FormListTopWrapper>
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

const FormListTopWrapper = styled.div`
	overflow-x: scroll;
	display: flex;
	flex-direction: row;
	width: 23.25rem;
	transition: display 0.5s;
	overflow-x: hidden;
`;

const FormListWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	height: 20rem;
	width: 23.25rem;
	border: 1px solid #e3e3e3;
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

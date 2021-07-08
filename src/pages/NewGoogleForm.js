import React, { useState, useEffect } from "react";
import * as Sentry from "@sentry/react";

import { db, firebase, firebaseApp } from "../firebase";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
	Header,
	QuestionTitle,
	Submit,
	FormContainer,
	FormCenter,
	BtnBox,
	Btn,
	FormBoxWrapper,
	FormBox,
	DefaultTitle,
	DefaultSubTitle,
} from "../styles/Form";
import { GrPowerReset } from "react-icons/gr";
import { IoArrowBackOutline } from "react-icons/io5";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import TextForm from "../components/TextForm";
import CheckboxForm from "../components/CheckboxForm";
import RadioForm from "../components/RadioForm";
import { Layout } from "../styles/Layout";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const NewGoogleForm = () => {
	const history = useHistory();
	const [questions, setQuestions] = useState([]);
	const [open, setOpen] = React.useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const [defaultValue, setDefaultValue] = useState({
		title: "",
		subtitle: "",
	});

	const goBack = function () {
		history.push("/");
	};

	const reset = () => {
		setQuestions([]);
		setDefaultValue({
			title: "",
			subtitle: "",
		});
	};

	const onChangeDefault = (e, key) => {
		var cp = { ...defaultValue };
		cp[key] = e.target.value;
		setDefaultValue(cp);
	};

	const createDefaultQuestion = () => {
		return {
			uuid: uuidv4(),
			title: "",
			text: "",
			questionType: "text",
		};
	};

	const addQuestion = () => {
		const cp = [...questions];
		cp.push(createDefaultQuestion());
		setQuestions(cp);
	};

	const updateQuestion = (key, uuid, data) => {
		const cp = [...questions];
		const index = cp.findIndex((x) => x.uuid === uuid);

		if (key === "questionType") {
			if (data === "checkbox" || data === "radio") {
				const payload = {
					title: cp[index].title,
					subtitle: cp[index].subtitle,
					questionType: data,
					uuid: cp[index].uuid,
					options: [{ title: "", uuid: uuidv4() }],
				};
				cp[index] = payload;
			} else if (data === "text") {
				const payload = {
					title: cp[index].title,
					subtitle: cp[index].subtitle,
					questionType: data,
					uuid: cp[index].uuid,
					text: "",
				};
				cp[index] = payload;
			}
		} else {
			cp[index] = { ...cp[index], [key]: data };
		}

		setQuestions(cp);
	};

	const deleteQuestion = (uuid) => {
		const cp = [...questions];
		const index = cp.findIndex((x) => x.uuid === uuid);
		cp.splice(index, 1);
		setQuestions(cp);
	};

	const submit = async function () {
		console.log(questions);
		const payload = {
			title: defaultValue.title,
			subtitle: defaultValue.subtitle,
			uuid: uuidv4(),
			questions: questions,
		};
		try {
			await db.collection("questions").pushpushbaby(payload);
			console.log("Complete make form.");
			history.push("/");
		} catch (error) {
			console.log(error);
			Sentry.captureException(error);
			alert("에러입니다");
		}
	};

	return (
		<Layout>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{"Back"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						현재 폼은 저장되지 않습니다. 뒤로가시겠습니까?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						취소
					</Button>
					<Button onClick={goBack} color="primary" autoFocus>
						뒤로가기
					</Button>
				</DialogActions>
			</Dialog>
			<Header>
				<Btn>
					<IoArrowBackOutline
						size={32}
						title="back"
						onClick={() => handleClickOpen()}
					/>
				</Btn>
				<QuestionTitle
					placeholder="제목을 입력하세요"
					name="title"
					value={defaultValue.title || ""}
					onChange={(e) => onChangeDefault(e, "title")}
				></QuestionTitle>
				<Submit variant="contained" color="primary" onClick={submit}>
					Submit
				</Submit>
			</Header>
			<Opac></Opac>
			<FormContainer>
				<FormCenter>
					<BtnBox>
						<Btn onClick={addQuestion}>
							<BsFillPlusCircleFill size={25} title="delete" />
						</Btn>
						<Btn onClick={reset}>
							<GrPowerReset size={25} title="reset" />
						</Btn>
					</BtnBox>
					<FormBoxWrapper>
						<FormBox>
							<DefaultTitle
								placeholder="설문지 제목"
								type="text"
								name="title"
								value={defaultValue.title || ""}
								onChange={(e) => onChangeDefault(e, "title")}
							></DefaultTitle>
							<DefaultSubTitle
								placeholder="설문지 내용"
								type="text"
								name="subtitle"
								value={defaultValue.subtitle || ""}
								onChange={(e) => onChangeDefault(e, "subtitle")}
							></DefaultSubTitle>
						</FormBox>
					</FormBoxWrapper>
					{questions.map((question, index) => {
						console.log("question ", index);
						console.log(question);
						if (question.questionType === "text") {
							return (
								<TextForm
									key={question.uuid}
									question={question}
									update={updateQuestion}
									delete={deleteQuestion}
								/>
							);
						} else if (question.questionType === "radio") {
							return (
								<RadioForm
									key={question.uuid}
									question={question}
									update={updateQuestion}
									delete={deleteQuestion}
								/>
							);
						} else if (question.questionType === "checkbox") {
							return (
								<CheckboxForm
									key={question.uuid}
									question={question}
									update={updateQuestion}
									delete={deleteQuestion}
								/>
							);
						}
					})}
				</FormCenter>
			</FormContainer>
		</Layout>
	);
};
const Opac = styled.div`
	width: 100%;
	/* border: 1px solid red; */
	background-color: transparent;
	background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), transparent);
	opacity: 1;
`;

export default NewGoogleForm;

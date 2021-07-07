import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Button } from "@material-ui/core";

import { GrPowerReset } from "react-icons/gr";

import {
	BtnBox,
	Btn,
	FormBoxWrapper,
	FormBox,
	DefaultTitle,
	DefaultSubTitle,
} from "../styles/Form";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import TextQuestion from "../components/TextQuestion";
import CheckboxQuestion from "../components/CheckboxQuestion";
import RadioQuestion from "../components/RadioQuestion";

// import { firebaseApp } from "../../firebase";
import { Layout, Container } from "../styles/Layout";
import {
	Header,
	Title,
	Submit,
	FormContainer,
	FormCenter,
	// FormDefaultBox,
} from "../styles/Form";

const NewGoogleForm = () => {
	const [questions, setQuestions] = useState([]);
	const [defaultValue, setDefaultValue] = useState({
		title: "",
		subtitle: "",
	});

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

	const addQuestion = () => {
		const cp = [...questions];
		cp.push(createDefaultQuestion());
		setQuestions(cp);
	};

	const createDefaultQuestion = () => {
		return {
			uuid: uuidv4(),
			title: "",
			text: "",
			questionType: "text",
			// questionType: "checkbox",
			// questionType: "radio",
		};
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
		// console.log(index);
		// const index = cp.filter(function (x) {
		// 	return x.uuid !== uuid;
		// });
		cp.splice(index, 1);
		setQuestions(cp);
		// setQuestions(index);
	};

	/* 
		삭제된 데이터는 실제로 삭제됐지만, 내용에는 남아 있을 때.
	
	*/

	const submit = () => {
		alert("제출!!!");
		console.log(questions);
	};

	return (
		<Layout>
			<Header>
				<Title
					placeholder="제목을 입력하세요"
					name="title"
					value={defaultValue.title || ""}
					onChange={(e) => onChangeDefault(e, "title")}
				></Title>
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
								<TextQuestion
									key={question.uuid}
									question={question}
									update={updateQuestion}
									delete={deleteQuestion}
								/>
							);
						} else if (question.questionType === "radio") {
							return (
								<RadioQuestion
									key={question.uuid}
									question={question}
									update={updateQuestion}
									delete={deleteQuestion}
								/>
							);
						} else if (question.questionType === "checkbox") {
							return (
								<CheckboxQuestion
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

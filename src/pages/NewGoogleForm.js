import React, { useState } from "react";

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
	const [defaultValue, setDefaultValue] = useState({
		title: "",
		subtitle: "",
	});
	const [questions, setQuestions] = useState([]);

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
			questionType: "text",
		};
	};

	const updateQuestion = (key, uuid, data) => {
		console.log("update!", key, uuid, data);
		console.log(key, uuid, data);
		const cp = [...questions];
		const index = cp.findIndex((x) => x.uuid === uuid);
		console.log(index);
		cp[index] = { ...cp[index], [key]: data };
		setQuestions(cp);
	};

	const deleteQuestion = (uuid) => {
		console.log("delete : " + uuid);
		const cp = [...questions];
		const index = cp.findIndex((x) => x.uuid === uuid);
		// const index = cp.filter(function (x) {
		// 	return x.uuid !== uuid;
		// });
		alert(index);
		console.log(cp);
		cp.splice(index, 0);
		setQuestions(cp);
	};

	return (
		<Layout>
			<Header>
				<Title
					placeholder="제목을 입력하세요"
					name="title"
					value={defaultValue.title}
					onChange={(e) => onChangeDefault(e, "title")}
				></Title>
				<Submit variant="contained" color="primary">
					Submit
				</Submit>
			</Header>
			<FormContainer>
				<FormCenter>
					<BtnBox>
						<Btn onClick={addQuestion}>
							<BsFillPlusCircleFill size={25} />
						</Btn>
						<Btn onClick={reset}>
							<GrPowerReset size={25} />
						</Btn>
					</BtnBox>
					<FormBoxWrapper>
						<FormBox>
							<DefaultTitle
								placeholder="설문지 제목"
								type="text"
								name="title"
								value={defaultValue.title}
								onChange={(e) => onChangeDefault(e, "title")}
							></DefaultTitle>
							<DefaultSubTitle
								placeholder="설문지 내용"
								type="text"
								name="subtitle"
								value={defaultValue.subtitle}
								onChange={(e) => onChangeDefault(e, "subtitle")}
							></DefaultSubTitle>
						</FormBox>
					</FormBoxWrapper>
					{questions.map((question, index) => {
						if (question.questionType === "text") {
							return (
								<TextQuestion
									key={index}
									question={question}
									update={updateQuestion}
									delete={deleteQuestion}
								/>
							);
						} else if (question.questionType === "radio") {
							return (
								<RadioQuestion
									key={index}
									question={question}
									update={updateQuestion}
									delete={deleteQuestion}
								/>
							);
						} else if (question.questionType === "checkbox") {
							return (
								<CheckboxQuestion
									key={index}
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

export default NewGoogleForm;

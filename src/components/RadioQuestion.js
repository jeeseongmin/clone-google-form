import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";

import {
	Button,
	Menu,
	MenuItem,
	FormControlLabel,
	FormGroup,
	Switch,
	Divider,
} from "@material-ui/core";

import {
	UserTop,
	TextDiv,
	UserTitle,
	UserSubTitle,
	Mid,
	Bottom,
	RadioWrapper,
	RadioBox,
	UserRadio,
	RadioText,
	EmptyRadioText,
	EmptyRadioBox,
	EmptryRadio,
	UserRadioBox,
	UserRadioText,
} from "../styles/Question";
import { FormBoxWrapper, FormBox } from "../styles/Form";

const RadioForm = (props) => {
	const question = props.question;
	const updateQuestion = props.update;
	const deleteQuestion = props.delete;
	const [disabledRadio, setDisabledRadio] = useState(0);

	const radioRef = useRef(null);

	const [checked, setChecked] = useState(false);
	const toggleChecked = () => {
		setChecked((prev) => !prev);
	};
	const [content, setContent] = useState({
		uuid: "",
		title: "",
		subtitle: "",
		questionType: "",
		options: [],
	});

	useEffect(() => {
		setContent({ ...question });
	}, []);

	const ChangeContent = function (e, key) {
		console.log("onChange ", key);
		var cp = { ...content };
		cp[key] = e.target.value;
		setContent(cp);
		updateQuestion(key, content.uuid, e.target.value);
	};

	const changeType = (after) => {
		const cp = { ...content };
		console.log(after);
		cp["questionType"] = after;
		setContent(cp);
		updateQuestion("questionType", content.uuid, after);
	};

	const addOption = function (e) {
		const cp = { ...content };
		cp.options.push(createDefaultOption());
		setContent(cp);
		radioRef.current.focus();
	};

	const createDefaultOption = () => {
		return { title: "", uuid: uuidv4() };
	};

	const deleteOption = function (uuid) {
		const cp = { ...content };
		const index = cp.options.findIndex((x) => x.uuid === uuid);
		cp.options.splice(index, 1);
		setContent(cp);
	};

	const editOption = function (e, id, type) {
		const cp = { ...content };
		const index = cp.options.findIndex((x) => x.uuid === id);
		cp.options[index][type] = e.target.value;
		setContent(cp);
	};

	return (
		<FormBoxWrapper>
			<FormBox>
				<UserTop>
					<UserTitle
						placeholder="설문지 제목"
						value={content.title || ""}
						readOnly
					></UserTitle>
					<UserSubTitle
						placeholder="설문지 내용"
						value={content.subtitle || ""}
						readOnly
					></UserSubTitle>
				</UserTop>
				<Mid>
					<RadioWrapper>
						{content.options.map((element, index) => {
							const id = element.uuid;
							const optionText = "옵션 " + (index + 1);

							if (index + 1 !== content.options.length) {
								return (
									<UserRadioBox key={element.uuid}>
										<UserRadio
											type="radio"
											name="radio"
											checked={disabledRadio}
											onChange={() => setDisabledRadio(0)}
										/>
										<UserRadioText
											placeholder={optionText}
											value={element.title}
											onChange={(e) => editOption(e, id, "title")}
										></UserRadioText>
									</UserRadioBox>
								);
							} else {
								return (
									<UserRadioBox key={element.uuid}>
										<UserRadio
											type="radio"
											name="radio"
											ref={radioRef}
											checked={disabledRadio}
											onChange={() => setDisabledRadio(0)}
										/>
										<UserRadioText
											placeholder={optionText}
											value={element.title}
											onChange={(e) => editOption(e, id, "title")}
										></UserRadioText>
									</UserRadioBox>
								);
							}
						})}
					</RadioWrapper>
				</Mid>
			</FormBox>
		</FormBoxWrapper>
	);
};

export default RadioForm;

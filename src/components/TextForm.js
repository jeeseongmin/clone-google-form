import React, { useState, useEffect } from "react";
import "../App.css";
import { RiDeleteBinLine } from "react-icons/ri";
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
	FormBoxWrapper,
	FormBox,
	Top,
	Top1,
	TextDiv,
	Title,
	SubTitle,
	Mid,
	Bottom,
	TextText,
} from "../styles/Question";

const TextForm = (props) => {
	const question = props.question;
	const updateQuestion = props.update;
	const deleteQuestion = props.delete;

	const [checked, setChecked] = useState(false);
	const toggleChecked = () => {
		setChecked((prev) => !prev);
	};
	const [content, setContent] = useState({
		title: "",
		subtitle: "",
		text: "",
		questionType: "",
		uuid: "",
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

	return (
		<FormBoxWrapper>
			<FormBox>
				<Top>
					<Top1>
						<TextDiv>
							<Title
								placeholder="질문"
								value={content.title || ""}
								onChange={(e) => ChangeContent(e, "title")}
							></Title>
						</TextDiv>
						<DropdownButton
							id="dropdown-item-button"
							title={content.questionType}
						>
							<Dropdown.Item as="button" onClick={(e) => changeType("text")}>
								text
							</Dropdown.Item>
							<Dropdown.Item
								as="button"
								onClick={(e) => changeType("checkbox")}
							>
								checkbox
							</Dropdown.Item>
							<Dropdown.Item as="button" onClick={() => changeType("radio")}>
								radio
							</Dropdown.Item>
						</DropdownButton>
					</Top1>
					<SubTitle
						placeholder="설명"
						value={content.subtitle || ""}
						onChange={(e) => ChangeContent(e, "subtitle")}
					></SubTitle>
				</Top>
				<Mid>
					<TextDiv>
						<TextText
							placeholder="단답형 텍스트"
							value={content.text || ""}
							onChange={(e) => ChangeContent(e, "text")}
						></TextText>
					</TextDiv>
				</Mid>
				<Divider />
				<Bottom>
					<RiDeleteBinLine
						size={25}
						className="deleteBtn"
						onClick={() => deleteQuestion(content.uuid)}
					/>
					<Divider orientation="vertical" flexItem />
					<div className="formGroup">
						<FormControlLabel
							control={<Switch checked={checked} onChange={toggleChecked} />}
							className="fcl"
							label="필수"
						/>
					</div>
				</Bottom>
			</FormBox>
		</FormBoxWrapper>
	);
};

// const areEqual = (prevProps, nextProps) => {
// 	return prevProps.question.uuid === nextProps.question.uuid;
// };

export default TextForm;
// export default React.memo(TextQuestion, areEqual);

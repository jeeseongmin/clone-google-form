import React, { useState, useEffect, useRef } from "react";
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
	TextDiv,
	Title,
	SubTitle,
	TextText,
	Top,
	Top1,
	Mid,
	Bottom,
	UserTitle,
	UserSubTitle,
	UserText,
	UserTop,
} from "../styles/Question";

import { FormBoxWrapper, FormBox } from "../styles/Form";

const TextQuestion = (props) => {
	const question = props.question;
	const updateQuestion = props.update;
	const deleteQuestion = props.delete;
	const [isFocused, setIsFocused] = useState(false);
	function focusHandler(isFocused) {
		setIsFocused(isFocused);
	}
	const textEffect = useRef();

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
				<UserTop>
					<UserTitle
						placeholder="질문"
						value={content.title || ""}
						readOnly
					></UserTitle>
					<UserSubTitle
						placeholder="설명"
						value={content.subtitle || ""}
						readOnly
					></UserSubTitle>
					<UserTextWrapper>
						<UserText
							placeholder="단답형 텍스트"
							value={content.text || ""}
							className="effectInput"
							onFocus={(e) => focusHandler(true)}
							onBlur={(e) => focusHandler(false)}
							// onChange={(e) => ChangeContent(e, "text")}
						></UserText>
						<UserTextEffectWrapper className="effectDiv"></UserTextEffectWrapper>
						<UserTextEffectPoint
							className={
								isFocused
									? "defaultEffect effectPoint"
									: "defaultEffect nonEffectPoint"
							}
						></UserTextEffectPoint>
					</UserTextWrapper>
				</UserTop>
			</FormBox>
		</FormBoxWrapper>
	);
};
const UserTextWrapper = styled.div`
	position: relative;
	margin-bottom: 1rem;
	display: flex;
`;
const UserTextEffectWrapper = styled.div`
	position: absolute;
	width: 18rem;
	height: 1px;
	/* border: 1px solid rgb(103, 58, 183); */
	bottom: -2px;
	left: 0px;
	margin: 0;
	user-select: none;
`;

const UserTextEffectPoint = styled.div`
	/* transform: matrix(0, 0, 0, 1, 0, 0); */
`;

// const areEqual = (prevProps, nextProps) => {
// 	return prevProps.question.uuid === nextProps.question.uuid;
// };

export default TextQuestion;
// export default React.memo(TextQuestion, areEqual);

import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { RiDeleteBinLine } from "react-icons/ri";
import styled from "styled-components";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Toggle from "../components/Toggle";
import { ImRadioChecked } from "react-icons/im";
import { IoMdCheckbox } from "react-icons/io";
import { GrTextAlignFull } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";
import OutsideClickHandler from "react-outside-click-handler";

import { FormControlLabel, Switch, Divider } from "@material-ui/core";

import {
	FormBoxWrapper,
	FormBox,
	FormBoxLeft,
	DefaultTitle,
	DefaultSubTitle,
} from "../styles/Form";
import {
	Top,
	Top1,
	TextDiv,
	Title,
	SubTitle,
	Mid,
	Bottom,
	TextText,
	DefaultTitleWrapper,
	UserTextEffectWrapper,
	UserTextEffectPoint,
} from "../styles/Question";

const TextForm = (props) => {
	const question = props.question;
	const updateQuestion = props.update;
	const deleteQuestion = props.delete;
	const moveMenu = props.moveMenu;
	const box = useRef();
	const dropDownWrapper = useRef();

	const [isFocusedBox, setIsFocusedBox] = useState(false);
	const [toggle, setToggle] = useState(false);

	const [dropDownShow, setDropDownShow] = useState(false);

	const showDropDown = function () {
		setDropDownShow(!dropDownShow);
	};
	const [isFocused, setIsFocused] = useState({
		title: false,
		text: false,
		subTitle: false,
	});

	useEffect(() => {
		const e = document.addEventListener("click");
		console.log(e);
	}, [showDropDown]);

	function focusHandler(state, type) {
		const cp = { ...isFocused };
		cp[type] = state;
		setIsFocused(cp);
	}

	function focusBoxHandler(status) {
		setIsFocusedBox(status);
	}
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
		<FormBoxWrapper
			ref={box}
			onFocus={() => focusBoxHandler(true)}
			onBlur={() => focusBoxHandler(false)}
			onClick={(e) => moveMenu(box, "text")}
		>
			{" "}
			<FormBoxLeft className={isFocusedBox ? "" : "hideLeftCheck"}>
				{/* 색처리 */}
			</FormBoxLeft>
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
						<DropDownWrapper>
							<DefaultDropDownItem onClick={showDropDown}>
								<DropDownIcon>
									<ImRadioChecked size={25} />
								</DropDownIcon>
								<DropDownText>객관식 질문</DropDownText>
								<IoMdArrowDropdown size={25} />
							</DefaultDropDownItem>
							<OutsideClickHandler
								onOutsideClick={() => setDropDownShow(false)}
							>
								<DropDownItemWrapper
									ref={dropDownWrapper}
									isShow={dropDownShow}
								>
									<DropDownItem>
										<DropDownIcon>
											<ImRadioChecked size={25} />
										</DropDownIcon>
										<DropDownText>객관식 질문</DropDownText>
									</DropDownItem>
									<DropDownItem>
										<DropDownIcon>
											<IoMdCheckbox size={25} />
										</DropDownIcon>
										<DropDownText>체크박스</DropDownText>
									</DropDownItem>
									<DropDownItem>
										<DropDownIcon>
											<GrTextAlignFull size={25} />
										</DropDownIcon>
										<DropDownText>단답형 질문</DropDownText>
									</DropDownItem>
								</DropDownItemWrapper>
							</OutsideClickHandler>
						</DropDownWrapper>

						{/* <DropdownButton
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
						</DropdownButton> */}
					</Top1>
					<SubTitle
						placeholder="설명"
						value={content.subtitle || ""}
						onChange={(e) => ChangeContent(e, "subtitle")}
					></SubTitle>
				</Top>
				<Mid>
					<DefaultTitleWrapper>
						<DefaultSubTitle
							placeholder="설문지 내용"
							type="text"
							name="subtitle"
							value={content.text || ""}
							onChange={(e) => ChangeContent(e, "text")}
							onFocus={(e) => focusHandler(true, "text")}
							onBlur={(e) => focusHandler(false, "text")}
						></DefaultSubTitle>
						<UserTextEffectWrapper className="effectDiv"></UserTextEffectWrapper>
						<UserTextEffectPoint
							className={
								isFocused.subTitle
									? "defaultEffect effectPoint"
									: "defaultEffect nonEffectPoint"
							}
						></UserTextEffectPoint>
					</DefaultTitleWrapper>
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
						<p>필수</p>
						<Toggle
							active={toggle}
							setToggle={(e) => setToggle((prev) => !prev)}
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

const DropDownText = styled.div`
	flex: 1;
`;

const DropDownIcon = styled.div`
	width: 2rem;
	margin-right: 0.5rem;
`;
const DropDownWrapper = styled.div`
	border: 1px solid #dadce0;
	border-radius: 3px;
	position: relative;
	background-color: white;
	width: 12.25rem;
	height: 3.75rem;
`;

const DropDownItemWrapper = styled.div`
	position: absolute;
	height: 10.6rem;
	top: -50px;
	border: 1px solid #dadce0;

	box-shadow: 10px 10px 20px 1px #e3e3e3;
	z-index: 1;
	display: ${(props) => (props.isShow ? "block" : "none")};
`;
const DropDownItem = styled.div`
	border-radius: 3px;
	background-color: white;
	width: 12rem;
	height: 3.5rem;
	display: flex;
	align-items: center;
	padding: 0 1rem;
	justify-content: space-between;
	font-size: 0.85rem;

	&:hover {
		background-color: #e3e3e3;
	}
`;

const DefaultDropDownItem = styled.div`
	border-radius: 3px;
	background-color: white;
	width: 12rem;
	height: 3.5rem;
	display: flex;
	align-items: center;
	padding: 0 1rem;
	justify-content: space-between;
	font-size: 0.85rem;
`;

export default TextForm;
// export default React.memo(TextQuestion, areEqual);

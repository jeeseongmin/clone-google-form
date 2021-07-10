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
	DropDownText,
	DropDownIcon,
	DropDownWrapper,
	DropDownItemWrapper,
	DropDownItem,
	DefaultDropDownItem,
} from "../styles/Question";

const TextForm = (props) => {
	const question = props.question;
	const updateQuestion = props.update;
	const deleteQuestion = props.delete;
	const moveMenu = props.moveMenu;
	const box = useRef();

	const [isFocusedBox, setIsFocusedBox] = useState(false);
	const [toggle, setToggle] = useState(false);

	const [dropDownShow, setDropDownShow] = useState(false);

	const [isFocused, setIsFocused] = useState({
		title: false,
		text: false,
		subTitle: false,
	});

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

		setDropDownShow(false);
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
							{content.questionType === "text" && (
								<DefaultDropDownItem
									onClick={() => setDropDownShow(!dropDownShow)}
								>
									<DropDownIcon>
										<GrTextAlignFull size={25} />
									</DropDownIcon>
									<DropDownText>단답형 질문</DropDownText>
									<IoMdArrowDropdown size={25} />
								</DefaultDropDownItem>
							)}
							{content.questionType === "radio" && (
								<DefaultDropDownItem
									onClick={() => setDropDownShow(!dropDownShow)}
								>
									<DropDownIcon>
										<ImRadioChecked size={25} />
									</DropDownIcon>
									<DropDownText>객관식 질문</DropDownText>
									<IoMdArrowDropdown size={25} />
								</DefaultDropDownItem>
							)}
							{content.questionType === "checkbox" && (
								<DefaultDropDownItem
									onClick={() => setDropDownShow(!dropDownShow)}
								>
									<DropDownIcon>
										<IoMdCheckbox size={25} />
									</DropDownIcon>
									<DropDownText>체크박스</DropDownText>
									<IoMdArrowDropdown size={25} />
								</DefaultDropDownItem>
							)}

							<OutsideClickHandler
								onOutsideClick={() => setDropDownShow(false)}
							>
								<DropDownItemWrapper isShow={dropDownShow}>
									<DropDownItem onClick={(e) => changeType("radio")}>
										<DropDownIcon>
											<ImRadioChecked size={25} />
										</DropDownIcon>
										<DropDownText>객관식 질문</DropDownText>
									</DropDownItem>
									<DropDownItem onClick={(e) => changeType("checkbox")}>
										<DropDownIcon>
											<IoMdCheckbox size={25} />
										</DropDownIcon>
										<DropDownText>체크박스</DropDownText>
									</DropDownItem>
									<DropDownItem onClick={(e) => changeType("text")}>
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

export default TextForm;
// export default React.memo(TextQuestion, areEqual);

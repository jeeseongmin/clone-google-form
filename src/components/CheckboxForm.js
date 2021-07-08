import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
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
	RadioWrapper,
	RadioBox,
	Radio,
	RadioText,
	EmptyRadioText,
	EmptyRadioBox,
	EmptryRadio,
} from "../styles/Question";

const CheckboxForm = (props) => {
	const question = props.question;
	const updateQuestion = props.update;
	const deleteQuestion = props.delete;
	const [disabledCheckbox, setDisabledCheckbox] = useState(0);

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
				<Top>
					<Top1>
						<TextDiv>
							<Title
								placeholder="설문지 제목"
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
						placeholder="설문지 내용"
						value={content.subtitle || ""}
						onChange={(e) => ChangeContent(e, "subtitle")}
					></SubTitle>
				</Top>
				<Mid>
					<RadioWrapper>
						{content.options.map((element, index) => {
							const id = element.uuid;
							const optionText = "옵션 " + (index + 1);
							if (index + 1 !== content.options.length) {
								return (
									<RadioBox key={element.uuid}>
										<Radio
											type="checkbox"
											name="checkbox"
											checked={disabledCheckbox}
											onChange={() => setDisabledCheckbox(0)}
										/>
										<RadioText
											placeholder={optionText}
											value={element.title}
											onChange={(e) => editOption(e, id, "title")}
										></RadioText>
										<IoMdClose
											size={28}
											className="radioDeleteBtn"
											onClick={() => deleteOption(id)}
										/>
									</RadioBox>
								);
							} else {
								return (
									<RadioBox key={element.uuid}>
										<Radio
											type="checkbox"
											name="checkbox"
											ref={radioRef}
											checked={disabledCheckbox}
											onChange={() => setDisabledCheckbox(0)}
										/>
										<RadioText
											placeholder={optionText}
											value={element.title}
											onChange={(e) => editOption(e, id, "title")}
										></RadioText>
										<IoMdClose
											size={28}
											className="radioDeleteBtn"
											onClick={() => deleteOption(id)}
										/>
									</RadioBox>
								);
							}
						})}

						<EmptyRadioBox>
							<EmptryRadio
								type="checkbox"
								checked={disabledCheckbox}
								onChange={() => setDisabledCheckbox(0)}
							/>
							<EmptyRadioText
								placeholder="옵션 추가"
								onClick={(e) => addOption(e)}
							></EmptyRadioText>
						</EmptyRadioBox>
					</RadioWrapper>
				</Mid>
				<Divider />
				<Bottom>
					<RiDeleteBinLine
						size={25}
						className="deleteBtn"
						onClick={() => deleteQuestion(question.uuid)}
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

export default CheckboxForm;

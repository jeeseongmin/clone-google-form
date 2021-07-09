import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
	UserCheckbox,
	Mid,
	RadioWrapper,
	UserTop,
	UserTitle,
	UserRadioBox,
	UserRadioText,
	UserSubTitle,
} from "../styles/Question";
import { FormBoxWrapper, FormBox } from "../styles/Form";

const CheckboxForm = (props) => {
	const question = props.question;
	const updateRadioQuestionAnswer = props.updateRadioQuestionAnswer;
	const [optionList, setOptionList] = useState([]);

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

	// 체크박스에서는 복수 체크가 가능하기 때문에 optionList라는 배열을 두어 입력받도록 한다.
	//
	useEffect(() => {
		updateRadioQuestionAnswer(question.uuid, optionList);
	}, [optionList]);

	const onChangeValue = function (e) {
		console.log(e.target.checked);
		if (e.target.checked) {
			if (!optionList.includes(e.target.value)) {
				const cp = [...optionList];
				cp.push(e.target.value);
				setOptionList(cp);
			}
		} else {
			const cp = optionList.filter(function (element) {
				return element !== e.target.value;
			});
			setOptionList(cp);
		}
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
							return (
								<UserRadioBox key={element.uuid}>
									<UserCheckbox
										type="checkbox"
										name="checkbox"
										value={element.uuid}
										onChange={onChangeValue}
									/>
									<UserRadioText value={element.title} readOnly></UserRadioText>
								</UserRadioBox>
							);
						})}
					</RadioWrapper>
				</Mid>
			</FormBox>
		</FormBoxWrapper>
	);
};

export default CheckboxForm;

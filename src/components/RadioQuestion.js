import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
	UserTop,
	UserTitle,
	UserSubTitle,
	Mid,
	RadioWrapper,
	UserRadio,
	UserRadioBox,
	UserRadioText,
} from "../styles/Question";
import { FormBoxWrapper, FormBox } from "../styles/Form";

const RadioForm = (props) => {
	const question = props.question;
	const updateRadioQuestionAnswer = props.updateRadioQuestionAnswer;
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

	const onChangeValue = (e) => {
		updateRadioQuestionAnswer(question.uuid, e.target.value);
	};

	const onCheck = (e) => {};

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
					<RadioWrapper onChange={(e) => onChangeValue(e)}>
						{content.options.map((element, index) => {
							return (
								<UserRadioBox key={element.uuid}>
									<UserRadio type="radio" name="radio" value={element.uuid} />
									<UserRadioText
										value={element.title}
										readOnly
										onChange={(e) => onCheck(e, element.uuid)}
									></UserRadioText>
								</UserRadioBox>
							);
						})}
					</RadioWrapper>
				</Mid>
			</FormBox>
		</FormBoxWrapper>
	);
};

export default RadioForm;

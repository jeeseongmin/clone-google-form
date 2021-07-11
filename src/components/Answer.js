import React, { useState, useEffect } from "react";
import "../App.css";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import classNames from "classnames";

import {
	UserTitle,
	UserSubTitle,
	UserText,
	UserTop,
	Mid,
	UserTextWrapper,
	UserTextEffectWrapper,
	UserTextEffectPoint,
	RadioWrapper,
	UserRadio,
	UserRadioBox,
	UserRadioText,
	UserCheckbox,
} from "../styles/Question";

import { FormBoxWrapper, FormBox } from "../styles/Form";

const Answer = (props) => {
	const question = props.question;
	const answer = props.answer;
	console.log("fuck");
	console.log(answer);

	const [text, setText] = useState("");

	const [isFocused, setIsFocused] = useState(false);
	function focusHandler(isFocused) {
		setIsFocused(isFocused);
	}

	if (question.questionType === "text") {
		return (
			<FormBoxWrapper>
				<FormBox>
					<UserTop>
						<UserTitle
							placeholder="질문"
							value={question.title || ""}
							readOnly
						></UserTitle>
						<UserSubTitle
							placeholder="설명"
							value={question.subtitle || ""}
							readOnly
						></UserSubTitle>
						<UserTextWrapper>
							<UserText
								value={answer[0].answer[question.uuid] || ""}
								className="effectInput"
								disabled
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
	} else if (question.questionType === "radio") {
		return (
			<FormBoxWrapper>
				<FormBox>
					<UserTop>
						<UserTitle
							placeholder="설문지 제목"
							value={question.title || ""}
							readOnly
						></UserTitle>
						<UserSubTitle
							placeholder="설문지 내용"
							value={question.subtitle || ""}
							readOnly
						></UserSubTitle>
					</UserTop>
					<Mid>
						<RadioWrapper>
							{question.options.map((element, index) => {
								const val = answer[0].answer[question.uuid].includes(
									element.uuid
								)
									? 1
									: 0;
								return (
									<UserRadioBox key={element.uuid}>
										<UserRadio
											type="radio"
											name="radio"
											checked={val}
											value={element.uuid}
											disabled
										/>
										<UserRadioText
											value={element.title}
											readOnly
										></UserRadioText>
									</UserRadioBox>
								);
							})}
						</RadioWrapper>
					</Mid>
				</FormBox>
			</FormBoxWrapper>
		);
	} else if (question.questionType === "checkbox") {
		return (
			<FormBoxWrapper>
				<FormBox>
					<UserTop>
						<UserTitle
							placeholder="설문지 제목"
							value={question.title || ""}
							readOnly
						></UserTitle>
						<UserSubTitle
							placeholder="설문지 내용"
							value={question.subtitle || ""}
							readOnly
						></UserSubTitle>
					</UserTop>
					<Mid>
						<RadioWrapper>
							{question.options.map((element, index) => {
								const val = answer[0].answer[question.uuid].includes(
									element.uuid
								)
									? 1
									: 0;
								return (
									<UserRadioBox key={element.uuid}>
										<UserCheckbox
											type="checkbox"
											name="checkbox"
											checked={val}
											value={element.uuid}
											disabled
										/>
										<UserRadioText
											value={element.title}
											readOnly
										></UserRadioText>
									</UserRadioBox>
								);
							})}
						</RadioWrapper>
					</Mid>
				</FormBox>
			</FormBoxWrapper>
		);
	}
};

export default Answer;
// export default React.memo(TextQuestion, areEqual);

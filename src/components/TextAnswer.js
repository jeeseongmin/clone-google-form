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
	UserTextWrapper,
	UserTextEffectWrapper,
	UserTextEffectPoint,
} from "../styles/Question";

import { FormBoxWrapper, FormBox } from "../styles/Form";

const TextAnswer = (props) => {
	const question = props.question;
	const [active, setActive] = useState(false);

	const [text, setText] = useState("");

	const [isFocused, setIsFocused] = useState(false);
	function focusHandler(isFocused) {
		setIsFocused(isFocused);
	}
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

	const onChangeValue = async function (e) {
		console.log(e.target.value);
		setText(e.target.value);
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
							value={text || ""}
							className="effectInput"
							onFocus={(e) => focusHandler(true)}
							onBlur={(e) => focusHandler(false)}
							onChange={(e) => onChangeValue(e)}
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

export default TextAnswer;
// export default React.memo(TextQuestion, areEqual);

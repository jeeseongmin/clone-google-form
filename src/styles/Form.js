import styled from "styled-components";

const FormCenter = styled.div`
	width: 40rem;
`;

const Submit = styled.div`
	color: #fff;
	background-color: #1976d2;
	padding: 6px 16px;
	font-size: 0.875rem;
	min-width: 64px;
	box-sizing: border-box;
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	font-family: "Roboto", "Helvetica", "Arial", sans-serif;
	font-weight: 500;
	line-height: 1.75;
	border-radius: 4px;
	letter-spacing: 0.02857em;
	text-transform: uppercase;

	cursor: pointer;
	margin-right: 2rem;
`;

const Header = styled.div`
	background-color: white;
	width: 100%;
	height: 8rem;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
`;
const FormContainer = styled.div`
	width: 100%;
	background-color: rgb(240, 235, 248);
	height: 100%;
	overflow-y: scroll;

	display: flex;
	justify-content: center;
	border: 1px solid red;
`;
const QuestionTitle = styled.input`
	border-style: none;
	margin-left: 2rem;
	width: 35rem;
	padding: 0.5rem 1rem;

	flex-shrink: 1;
	background-color: transparent;
	border: none;
	display: block;
	font: 400 16px Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
	min-width: 0%;
	outline: none;
	font-size: 1.25rem;
	padding: 0.5em 0;
	z-index: 0;

	border-bottom: 2px solid black;
`;

const BtnBox = styled.div`
	width: 100%;
	background-color: white;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
const Btn = styled.button`
	width: 3rem;
	height: 3rem;
	background-color: white;
	border-radius: 20px;
	border-style: none;
	&:hover {
		background-color: #e3e3e3;
	}
`;
const FormBoxWrapper = styled.div`
	padding: 0.75rem;
	background-color: white;
	margin-top: 1rem;
	margin-bottom: 1rem;
	border: 1px solid #dadce0;
	border-radius: 8px;
`;
const TopBoxWrapper = styled.div`
	padding: 0.75rem;
	background-color: white;
	margin-top: 1rem;
	margin-bottom: 1rem;
	border: 1px solid #dadce0;
	border-radius: 8px;
	position: relative;
`;

const DefaultTitle = styled.input`
	border-style: none;
	border: 1px solid red;
	margin-left: 2rem;

	flex-shrink: 1;
	background-color: transparent;
	border: none;
	display: block;
	font: 400 16px Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
	min-width: 0%;
	outline: none;
	padding: 0.5em 0;
	z-index: 0;
	font-size: 2rem;
	width: 90%;
	border-bottom: 3px solid #e3e3e3;
	margin-bottom: 1rem;
`;

const DefaultSubTitle = styled.input`
	border-style: none;
	margin-left: 2rem;

	flex-shrink: 1;
	background-color: transparent;
	border: none;
	display: block;
	font: 400 16px Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
	min-width: 0%;
	outline: none;
	padding: 0.5em 0;
	padding-left: 0.3rem;
	z-index: 0;

	width: 90%;
	border-bottom: 3px solid #e3e3e3;
	margin-bottom: 1rem;
`;

const FormBox = styled.div`
	width: 100%;
	max-width: 100%;
	height: auto;
	padding: 0 0.5rem;

	/* padding: 0.75rem; */
`;

const UserDefaultTitle = styled.div`
	border-style: none;
	border: 1px solid red;
	/* margin-left: 2rem; */

	flex-shrink: 1;
	background-color: transparent;
	border: none;
	display: block;
	font: 400 16px Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
	min-width: 0%;
	outline: none;
	padding: 0.25em 0;
	z-index: 0;
	font-size: 2rem;
	word-break: break-all;
	width: 38rem;
	margin-bottom: 0rem;
`;

const UserDefaultSubTitle = styled.div`
	border-style: none;
	/* margin-left: 2rem; */

	flex-shrink: 1;
	background-color: transparent;
	border: none;
	display: block;
	font: 400 16px Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
	min-width: 0%;
	outline: none;
	padding: 0.25em 0;
	padding-left: 0.3rem;
	z-index: 0;
	width: 38rem;
	word-break: break-all;

	margin-bottom: 0.5rem;
`;
const UserDefaultRed = styled.div`
	border-style: none;
	/* margin-left: 2rem; */

	flex-shrink: 1;
	background-color: transparent;
	border: none;
	display: block;
	font: 400 16px Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
	min-width: 0%;
	outline: none;
	padding: 0.25em 0;
	padding-left: 0.3rem;
	z-index: 0;
	width: 38rem;
	word-break: break-all;
	color: #d93025;

	/* border-bottom: 3px solid white; */
	margin-bottom: 0.5rem;
`;

export {
	Header,
	TopBoxWrapper,
	QuestionTitle,
	Submit,
	FormContainer,
	FormCenter,
	BtnBox,
	Btn,
	FormBoxWrapper,
	FormBox,
	DefaultTitle,
	DefaultSubTitle,
	UserDefaultTitle,
	UserDefaultSubTitle,
	UserDefaultRed,
};

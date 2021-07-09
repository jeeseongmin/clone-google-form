import styled from "styled-components";

const FormCenter = styled.div`
	width: 44rem;
	margin-bottom: 2rem;
	padding-bottom: 2rem;
	/* padding-right: 4rem; */
`;

const Submit = styled.div`
	color: #fff;
	background-color: rgb(103, 58, 183);
	padding: 6px 16px;
	font-size: 0.875rem;
	min-width: 64px;
	max-width: 100px;
	height: 40px;
	display: flex;
	align-items: center;
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
	justify-content: flex-start;
	flex-direction: column;
`;

const HeaderTop = styled.div`
	width: 100%;
	height: 4rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const HeaderTopLeft = styled.div`
	height: 4rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const HeaderTopRight = styled.div`
	height: 4rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const HeaderBottom = styled.div`
	width: 100%;
	height: 4rem;
`;

const FormContainer = styled.div`
	width: 100%;
	background-color: rgb(240, 235, 248);
	height: 100%;
	overflow-y: scroll;

	display: flex;
	justify-content: center;
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
	position: relative;
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
	/* margin-left: 2rem; */
	flex-shrink: 1;
	background-color: transparent;
	border: none;
	display: block;
	font: 400 16px Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
	min-width: 0%;
	outline: none;
	margin-top: 0.75rem;
	z-index: 0;
	font-size: 2rem;
	width: 100%;
	margin-bottom: 0.5rem;
`;

const DefaultSubTitle = styled.input`
	border-style: none;

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

	width: 100%;
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
	padding-left: 0rem;
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
const FormBoxTop = styled.div`
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	background-color: rgb(103, 58, 183);
	height: 10px;
	position: absolute;
	left: -1px;
	top: -1px;
	width: calc(100% + 2px);
`;
const FormBoxLeft = styled.div`
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
	background-color: #4285f4;
	width: 8px;
	position: absolute;
	left: -1px;
	top: -1px;
	height: calc(100% + 2px);
`;

export {
	Header,
	HeaderTop,
	HeaderBottom,
	HeaderTopLeft,
	HeaderTopRight,
	FormBoxTop,
	TopBoxWrapper,
	QuestionTitle,
	Submit,
	FormContainer,
	FormCenter,
	BtnBox,
	Btn,
	FormBoxWrapper,
	FormBox,
	FormBoxLeft,
	DefaultTitle,
	DefaultSubTitle,
	UserDefaultTitle,
	UserDefaultSubTitle,
	UserDefaultRed,
};

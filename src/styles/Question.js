import styled from "styled-components";

const Top = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;
`;

const Top1 = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
`;

const Mid = styled.div`
	width: 100%;
	margin-bottom: 0.5rem;
`;
const Bottom = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	flex-direction: row;
	align-items: center;
	margin-top: 0.5rem;
`;

const FormBoxWrapper = styled.div`
	padding: 0.75rem;
	background-color: white;
	margin-top: 1rem;
	margin-bottom: 1rem;
`;

const TextDiv = styled.div`
	width: 100%;
`;
const Title = styled.input`
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
	z-index: 0;
	font-size: 1.25rem;
	width: 90%;
	border-bottom: 3px solid #e3e3e3;
	margin-bottom: 1rem;
`;

const SubTitle = styled.input`
	border-style: none;
	font-size: 0.75rem;

	flex-shrink: 1;
	background-color: transparent;
	border: none;
	display: block;
	font: 400 16px Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
	min-width: 0%;
	outline: none;
	padding: 0.5em 0;
	z-index: 0;
	padding-left: 0.15rem;

	width: 90%;
	border-bottom: 3px solid #e3e3e3;
	margin-bottom: 1rem;
`;

const FormBox = styled.div`
	width: 100%;
	max-width: 100%;
	height: auto;

	/* padding: 0.75rem; */
`;

export {
	FormBoxWrapper,
	FormBox,
	Top,
	Top1,
	TextDiv,
	Title,
	SubTitle,
	Mid,
	Bottom,
};

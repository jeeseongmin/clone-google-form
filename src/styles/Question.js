import styled from "styled-components";

const UserTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0.5rem 1rem;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0.5rem;
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

const TextDiv = styled.div`
  width: 100%;
  padding: 0 0.5rem;
`;

const Title = styled.input`
  border-style: none;
  flex-shrink: 1;
  background-color: transparent;
  border: none;
  display: block;
  font-family: "dohyeon";
  min-width: 0%;
  outline: none;
  padding: 1em 0;
  z-index: 0;
  font-size: 1rem;
  width: 100%;
  border-bottom: 3px solid #e3e3e3;
  margin-bottom: 1rem;
`;

const SubTitle = styled.input`
  border-style: none;
  font-size: 0.75rem;
  font-family: "dohyeon";

  flex-shrink: 1;
  background-color: transparent;
  border: none;
  display: block;
  min-width: 0%;
  outline: none;
  padding: 0.5em 0;
  z-index: 0;
  padding-left: 0.5rem;
  font-size: 1rem;
  width: 98%;
  border-bottom: 3px solid #e3e3e3;
  margin-bottom: 1rem;
`;

const TextText = styled.input`
  border-style: none;
  font-size: 0.75rem;

  flex-shrink: 1;
  background-color: transparent;
  border: none;
  display: block;
  font-family: "dohyeon";
  min-width: 0%;
  outline: none;
  padding: 0.5em 0;
  z-index: 0;
  padding-left: 0.15rem;

  width: 90%;
  border-bottom: 3px solid #e3e3e3;
  margin-bottom: 1rem;
  margin-left: 2rem;
`;

const UserTitle = styled.input`
  border-style: none;
  flex-shrink: 1;
  background-color: transparent;
  border: none;
  display: block;
  font-weight: semi-bold;
  min-width: 0%;
  outline: none;
  padding: 0.25em 0;
  z-index: 0;
  word-break: break-all;
  width: 35rem;
  margin-bottom: 0.5rem;
`;

const UserSubTitle = styled.input`
  border-style: none;
  flex-shrink: 1;
  background-color: transparent;
  border: none;
  display: block;
  font-family: "dohyeon";
  color: gray;
  font-size: 0.75rem;
  min-width: 0%;
  outline: none;
  padding: 0.25em 0;
  z-index: 0;
  padding-left: 0.15rem;
  word-break: break-all;
  width: 35rem;
  margin-bottom: 1.5rem;
`;

const UserText = styled.input`
  border-style: none;
  font-size: 1rem;
  flex-shrink: 1;
  background-color: transparent;
  border: none;
  display: block;
  font-family: "dohyeon";
  min-width: 0%;
  outline: none;
  padding: 0.5em 0;
  width: 18rem;
  z-index: 0;
  padding-left: 0.15rem;

  border-bottom: 1px solid #e3e3e3;
`;

const RadioWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: center; */
  font-family: "dohyeon";
`;

const EmptyRadioBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid red; */
  margin-bottom: 0.5rem;
  font-family: "dohyeon";
`;

const RadioBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.5rem;
  font-family: "dohyeon";
`;

const UserRadioBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid red; */
  margin-bottom: 0.5rem;
  padding: 0 1.25rem;
  font-family: "dohyeon";
`;

const EmptryRadio = styled.input`
  width: 5rem;
  padding: 0;
  font-family: "dohyeon";
`;

const Radio = styled.input`
  width: 5rem;
  select: none;
  padding: 0;
  font-family: "dohyeon";
`;

const Checkbox = styled.input`
  width: 5rem;
  /* border: 1px solid red; */
  padding: 0;
  margin-right: 0.75rem;
  font-family: "dohyeon";
`;

const UserRadio = styled.input`
  width: 5rem;
  /* border: 1px solid red; */
  padding: 0;
  width: 20px; /*Desired width*/

  height: 20px; /*Desired height*/
  margin-right: 0.75rem;
  font-family: "dohyeon";
`;

const UserCheckbox = styled.input`
  width: 5rem;
  /* border: 1px solid red; */
  padding: 0;
  width: 20px; /*Desired width*/

  height: 20px; /*Desired height*/
  margin-right: 0.75rem;
  font-family: "dohyeon";
`;

const EmptyRadioText = styled.input`
  border-style: none;
  font-size: 0.75rem;

  flex-shrink: 1;
  background-color: transparent;
  border: none;
  display: block;
  font-family: "dohyeon";
  min-width: 0%;
  outline: none;
  padding: 0.5em 0;
  z-index: 0;
  padding-left: 0.15rem;
  margin-left: -0.55rem;
  /* margin-right: 1.5rem; */
  /* width: 5rem; */
  border-bottom: 3px solid #e3e3e3;
  /* border: 1px solid red; */
  font-family: "dohyeon";
`;
const RadioText = styled.input`
  border-style: none;
  font-size: 0.75rem;

  flex-shrink: 1;
  background-color: transparent;
  border: none;
  display: block;
  font-family: "dohyeon";
  min-width: 0%;
  outline: none;
  padding: 0.5em 0;
  z-index: 0;
  padding-left: 0.15rem;
  font-size: 1rem;

  margin-right: 1.5rem;
  width: 100%;
  border-bottom: 3px solid #e3e3e3;
  /* border: 1px solid red; */
`;

const UserRadioText = styled.input`
  border-style: none;
  font-size: 0.75rem;

  flex-shrink: 1;
  background-color: transparent;
  border: none;
  display: block;
  font-family: "dohyeon";
  min-width: 0%;
  outline: none;
  padding: 0.5em 0;
  z-index: 0;
  padding-left: 0.15rem;
  font-size: 1rem;

  margin-right: 1.5rem;
  width: 100%;
  /* border: 1px solid red; */
`;

const DefaultTitleWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  display: flex;

  border-style: none;
  margin-left: 1.25rem;

  flex-shrink: 1;
  background-color: transparent;
  border: none;
  display: block;
  font-family: "dohyeon";
  min-width: 0%;
  outline: none;
  padding: 0.1em 0;
  z-index: 0;
  font-size: 2rem;
  width: 38rem;
  border-bottom: 3px solid #e3e3e3;
  margin-bottom: 1rem;
`;

const UserTextWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  display: flex;
  width: 18rem;
`;
const UserTextEffectWrapper = styled.div`
  position: absolute;
  width: 18rem;
  height: 1px;
  /* border: 1px solid rgb(103, 58, 183); */
  bottom: -2px;
  left: 0px;
  margin: 0;
  user-select: none;
`;

const UserTextEffectPoint = styled.div``;

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

export {
  UserTextWrapper,
  DefaultTitleWrapper,
  UserTextEffectWrapper,
  UserTextEffectPoint,
  Top,
  UserTop,
  Top1,
  TextDiv,
  Title,
  SubTitle,
  Mid,
  Bottom,
  RadioWrapper,
  RadioBox,
  Radio,
  Checkbox,
  RadioText,
  TextText,
  EmptyRadioText,
  EmptyRadioBox,
  EmptryRadio,
  UserRadioBox,
  UserRadioText,
  UserTitle,
  UserSubTitle,
  UserText,
  UserRadio,
  UserCheckbox,
  DropDownText,
  DropDownIcon,
  DropDownWrapper,
  DropDownItemWrapper,
  DropDownItem,
  DefaultDropDownItem,
};

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
import { ImRadioChecked } from "react-icons/im";
import { IoMdCheckbox } from "react-icons/io";
import { GrTextAlignFull } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";
import OutsideClickHandler from "react-outside-click-handler";

import {
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
  DropDownText,
  DropDownIcon,
  DropDownWrapper,
  DropDownItemWrapper,
  DropDownItem,
  DefaultDropDownItem,
} from "../styles/Question";
import Toggle from "../components/Toggle";
import { FormBoxWrapper, FormBox } from "../styles/Form";

const CheckboxForm = (props) => {
  const question = props.question;
  const updateQuestion = props.update;
  const deleteQuestion = props.delete;
  const moveMenu = props.moveMenu;
  const [disabledCheckbox, setDisabledCheckbox] = useState(0);
  const [toggle, setToggle] = useState(false);
  const radioRef = useRef(null);
  const textRef = useRef(null);
  const curRef = useRef(null);

  const [dropDownShow, setDropDownShow] = useState(false);

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
    var cp = { ...content };
    cp[key] = e.target.value;
    setContent(cp);
    updateQuestion(key, content.uuid, e.target.value);
  };

  const changeType = (after) => {
    const cp = { ...content };
    cp["questionType"] = after;
    setContent(cp);
    updateQuestion("questionType", content.uuid, after);
  };

  const addOption = function (e) {
    const cp = { ...content };
    cp.options.push(createDefaultOption());
    setContent(cp);
    setTimeout(() => {
      textRef.current.focus();
    }, 100);
  };

  const createDefaultOption = () => {
    return { title: "", uuid: uuidv4() };
  };

  const deleteOption = function (uuid) {
    if (content.options.length > 1) {
      const cp = { ...content };
      const index = cp.options.findIndex((x) => x.uuid === uuid);
      cp.options.splice(index, 1);
      setContent(cp);
    }
  };

  const editOption = function (e, id, type) {
    const cp = { ...content };
    const index = cp.options.findIndex((x) => x.uuid === id);
    cp.options[index][type] = e.target.value;
    setContent(cp);
  };

  return (
    <FormBoxWrapper ref={curRef} onClick={(e) => moveMenu(curRef, "text")}>
      <FormBox>
        <Top>
          <Top1>
            <TextDiv>
              <Title
                placeholder='설문지 제목'
                value={content.title || ""}
                onChange={(e) => ChangeContent(e, "title")}></Title>
            </TextDiv>
            <DropDownWrapper>
              {content.questionType === "text" && (
                <DefaultDropDownItem
                  onClick={() => setDropDownShow(!dropDownShow)}>
                  <DropDownIcon>
                    <GrTextAlignFull size={25} />
                  </DropDownIcon>
                  <DropDownText>단답형 질문</DropDownText>
                  <IoMdArrowDropdown size={25} />
                </DefaultDropDownItem>
              )}
              {content.questionType === "radio" && (
                <DefaultDropDownItem
                  onClick={() => setDropDownShow(!dropDownShow)}>
                  <DropDownIcon>
                    <ImRadioChecked size={25} />
                  </DropDownIcon>
                  <DropDownText>객관식 질문</DropDownText>
                  <IoMdArrowDropdown size={25} />
                </DefaultDropDownItem>
              )}
              {content.questionType === "checkbox" && (
                <DefaultDropDownItem
                  onClick={() => setDropDownShow(!dropDownShow)}>
                  <DropDownIcon>
                    <IoMdCheckbox size={25} />
                  </DropDownIcon>
                  <DropDownText>체크박스</DropDownText>
                  <IoMdArrowDropdown size={25} />
                </DefaultDropDownItem>
              )}

              <OutsideClickHandler
                onOutsideClick={() => setDropDownShow(false)}>
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
            placeholder='설문지 내용'
            value={content.subtitle || ""}
            onChange={(e) => ChangeContent(e, "subtitle")}></SubTitle>
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
                      type='checkbox'
                      name='checkbox'
                      disabled='true'
                      checked={disabledCheckbox}
                      onChange={() => setDisabledCheckbox(0)}
                    />
                    <RadioText
                      placeholder={optionText}
                      value={element.title}
                      onChange={(e) => editOption(e, id, "title")}></RadioText>
                    <IoMdClose
                      size={28}
                      className='radioDeleteBtn'
                      onClick={() => deleteOption(id)}
                    />
                  </RadioBox>
                );
              } else {
                return (
                  <RadioBox key={element.uuid}>
                    <Radio
                      type='checkbox'
                      name='checkbox'
                      disabled='true'
                      ref={radioRef}
                      checked={disabledCheckbox}
                      onChange={() => setDisabledCheckbox(0)}
                    />
                    <RadioText
                      placeholder={optionText}
                      value={element.title}
                      ref={textRef}
                      onChange={(e) => editOption(e, id, "title")}></RadioText>
                    <IoMdClose
                      size={28}
                      className='radioDeleteBtn'
                      onClick={() => deleteOption(id)}
                    />
                  </RadioBox>
                );
              }
            })}

            <RadioBox>
              <Radio
                type='checkbox'
                name='checkbox'
                disabled='true'
                checked={disabledCheckbox}
                onChange={() => setDisabledCheckbox(0)}
              />
              <RadioText
                placeholder='옵션 추가'
                onFocus={(e) => addOption(e)}></RadioText>
              <IoMdClose size={28} className='radioDeleteBtn space-hidden' />
            </RadioBox>
          </RadioWrapper>
        </Mid>
        <Divider />
        <Bottom>
          <RiDeleteBinLine
            size={25}
            className='deleteBtn'
            onClick={() => deleteQuestion(question.uuid)}
          />
          <Divider orientation='vertical' flexItem />
          <div className='formGroup'>
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

export default CheckboxForm;

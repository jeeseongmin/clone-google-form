import React, { useState, useCallback, useEffect, useRef } from "react";

import { db } from "../firebase";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  Header,
  HeaderTop,
  HeaderTopLeft,
  HeaderTopRight,
  HeaderBottom,
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
  FormBoxTop,
  FormBoxLeft,
} from "../styles/Form";

import {
  UserTextWrapper,
  DefaultTitleWrapper,
  UserTextEffectWrapper,
  UserTextEffectPoint,
  UserText,
} from "../styles/Question";
import { GrPowerReset } from "react-icons/gr";
import { IoArrowBackOutline } from "react-icons/io5";
import { BsEye } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { RiPaletteLine } from "react-icons/ri";
import { BsFillPlusCircleFill, BsStar } from "react-icons/bs";
import { AiOutlineFolder } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import googleFormIcon from "../images/googleFormIcon.png";
import TextForm from "../components/TextForm";
import CheckboxForm from "../components/CheckboxForm";
import RadioForm from "../components/RadioForm";
import { Layout } from "../styles/Layout";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Toggle from "../components/Toggle";

const NewGoogleForm = () => {
  const history = useHistory();
  const [questions, setQuestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [isFocusedBox, setIsFocusedBox] = useState(false);
  const topRef = useRef();
  const [menuPos, setMenuPos] = useState(0);

  const [isFocused, setIsFocused] = useState({
    title1: false,
    title2: false,
    subTitle: false,
  });
  function focusHandler(state, type) {
    const cp = { ...isFocused };
    cp[type] = state;
    setIsFocused(cp);
  }

  function focusBoxHandler(status) {
    setIsFocusedBox(status);
  }

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      //Do whatever when esc is pressed
      handleClickOpen();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  const [content, setContent] = useState({
    title: "",
    subtitle: "",
    text: "",
    questionType: "",
    uuid: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [defaultValue, setDefaultValue] = useState({
    title: "",
    subtitle: "",
  });

  const goBack = function () {
    history.push("/");
  };

  const reset = () => {
    setQuestions([]);
    setDefaultValue({
      title: "",
      subtitle: "",
    });
    moveMenu(topRef, "top");
  };

  const onChangeDefault = (e, key) => {
    var cp = { ...defaultValue };
    cp[key] = e.target.value;
    setDefaultValue(cp);
  };

  const createDefaultQuestion = () => {
    return {
      uuid: uuidv4(),
      title: "",
      text: "",
      questionType: "text",
    };
  };

  const addQuestion = (e) => {
    const cp = [...questions];
    cp.push(createDefaultQuestion());
    setQuestions(cp);
  };

  const updateQuestion = (key, uuid, data) => {
    const cp = [...questions];
    const index = cp.findIndex((x) => x.uuid === uuid);

    if (key === "questionType") {
      if (data === "checkbox" || data === "radio") {
        const payload = {
          title: cp[index].title,
          subtitle: cp[index].subtitle,
          questionType: data,
          uuid: cp[index].uuid,
          options: [{ title: "", uuid: uuidv4() }],
        };
        cp[index] = payload;
      } else if (data === "text") {
        const payload = {
          title: cp[index].title,
          subtitle: cp[index].subtitle,
          questionType: data,
          uuid: cp[index].uuid,
          text: "",
        };
        cp[index] = payload;
      }
    } else {
      cp[index] = { ...cp[index], [key]: data };
    }

    setQuestions(cp);
  };

  const deleteQuestion = (uuid) => {
    const cp = [...questions];
    const index = cp.findIndex((x) => x.uuid === uuid);
    cp.splice(index, 1);
    setQuestions(cp);
  };

  const submit = async function () {
    if (defaultValue.title === "" || defaultValue.subtitle === "") {
      alert("제목과 설명을 적어주세요.");
      return;
    }
    const payload = {
      title: defaultValue.title,
      subtitle: defaultValue.subtitle,
      uuid: uuidv4(),
      questions: questions,
    };
    try {
      await db.collection("questions").add(payload);
      history.push("/");
    } catch (error) {
      console.log(error);
      alert("에러입니다");
    }
  };

  const moveMenu = function (e, pos) {
    if (pos === "top") {
      setMenuPos("0px");
    } else if (pos === "text") {
      const text = e.current.offsetTop - 18 + "px";
      setMenuPos(text);
    } else {
      const text = e.clientY - 250 + "px";
      setMenuPos(text);
    }
  };

  return (
    <Layout>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>{"Back"}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            현재 폼은 저장되지 않습니다. 뒤로가시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            취소
          </Button>
          <Button onClick={goBack} color='primary' autoFocus>
            뒤로가기
          </Button>
        </DialogActions>
      </Dialog>

      <Header>
        <HeaderTop>
          <HeaderTopLeft>
            <div
              className='ggFormIconWrapper'
              onClick={() => handleClickOpen()}>
              <img
                src={googleFormIcon}
                className='ggForm'
                alt='googleformIcon'
              />
            </div>
            <UserTextWrapper className='NewFormDefaultTitleWrapper'>
              <UserText
                placeholder='제목을 입력하세요'
                name='title'
                className='NewFormDefaultTitle'
                value={defaultValue.title || ""}
                onChange={(e) => onChangeDefault(e, "title")}
                onFocus={(e) => focusHandler(true, "title1")}
                onBlur={(e) => focusHandler(false, "title1")}></UserText>
              <UserTextEffectWrapper className='effectDiv'></UserTextEffectWrapper>
              <UserTextEffectPoint
                className={
                  isFocused.title1
                    ? "defaultEffect effectPoint"
                    : "defaultEffect nonEffectPoint"
                }></UserTextEffectPoint>
            </UserTextWrapper>
            <Btn>
              <AiOutlineFolder size={25} title='folder' />
            </Btn>
            <Btn>
              <BsStar size={25} title='star' />
            </Btn>
          </HeaderTopLeft>

          <HeaderTopRight>
            <Btn>
              <RiPaletteLine size={25} title='palette' />
            </Btn>
            <Btn>
              <BsEye size={25} title='eye' />
            </Btn>
            <Btn>
              <IoSettingsOutline size={25} title='setting' />
            </Btn>

            <Submit variant='contained' color='primary' onClick={submit}>
              보내기
            </Submit>
          </HeaderTopRight>
        </HeaderTop>
        <HeaderBottom></HeaderBottom>
      </Header>

      <Opac></Opac>
      <FormContainer>
        <FormCenterWrapper>
          <FormCenter>
            <MenuWrapper>
              <Menu menuPos={menuPos}>
                <MenuBtn onClick={addQuestion}>
                  <BsFillPlusCircleFill size={25} title='add' />
                </MenuBtn>
                <MenuBtn onClick={reset}>
                  <GrPowerReset size={25} title='reset' />
                </MenuBtn>
              </Menu>
            </MenuWrapper>
            <FormBoxWrapper
              onFocus={() => focusBoxHandler(true)}
              onBlur={() => focusBoxHandler(false)}
              ref={topRef}
              onClick={(e) => moveMenu(e, "top")}>
              <FormBoxLeft className={isFocusedBox ? "" : "hideLeftCheck"}>
                {/* 색처리 */}
              </FormBoxLeft>
              <FormBoxTop>{/* 색처리 */}</FormBoxTop>
              <FormBox>
                <DefaultTitleWrapper>
                  <DefaultTitle
                    autocomplete='off'
                    placeholder='제목을 입력하세요'
                    name='title'
                    className='NewFormDefaultTitle'
                    value={defaultValue.title || ""}
                    onChange={(e) => onChangeDefault(e, "title")}
                    onFocus={(e) => focusHandler(true, "title2")}
                    onBlur={(e) =>
                      focusHandler(false, "title2")
                    }></DefaultTitle>
                  <UserTextEffectWrapper className='effectDiv'></UserTextEffectWrapper>
                  <UserTextEffectPoint
                    className={
                      isFocused.title2
                        ? "defaultEffect effectPoint"
                        : "defaultEffect nonEffectPoint"
                    }></UserTextEffectPoint>
                </DefaultTitleWrapper>
                <DefaultTitleWrapper>
                  <DefaultSubTitle
                    autocomplete='off'
                    placeholder='설문지 내용'
                    type='text'
                    name='subtitle'
                    value={defaultValue.subtitle || ""}
                    onChange={(e) => onChangeDefault(e, "subtitle")}
                    onFocus={(e) => focusHandler(true, "subTitle")}
                    onBlur={(e) =>
                      focusHandler(false, "subTitle")
                    }></DefaultSubTitle>
                  <UserTextEffectWrapper className='effectDiv'></UserTextEffectWrapper>
                  <UserTextEffectPoint
                    className={
                      isFocused.subTitle
                        ? "defaultEffect effectPoint"
                        : "defaultEffect nonEffectPoint"
                    }></UserTextEffectPoint>
                </DefaultTitleWrapper>
              </FormBox>{" "}
            </FormBoxWrapper>
            {questions.map((question, index) => {
              if (question.questionType === "text") {
                return (
                  <TextForm
                    key={question.uuid}
                    question={question}
                    update={updateQuestion}
                    delete={deleteQuestion}
                    moveMenu={moveMenu}
                    last={index === questions.length - 1}
                  />
                );
              } else if (question.questionType === "radio") {
                return (
                  <RadioForm
                    key={question.uuid}
                    question={question}
                    update={updateQuestion}
                    moveMenu={moveMenu}
                    delete={deleteQuestion}
                  />
                );
              } else if (question.questionType === "checkbox") {
                return (
                  <CheckboxForm
                    key={question.uuid}
                    question={question}
                    update={updateQuestion}
                    moveMenu={moveMenu}
                    delete={deleteQuestion}
                  />
                );
              }
            })}
          </FormCenter>
        </FormCenterWrapper>
      </FormContainer>
    </Layout>
  );
};

const FormCenterWrapper = styled.div`
  width: 44rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  position: relative;
  display: flex;
`;

const MenuWrapper = styled.div`
  height: 0;
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 100%;
`;
const Menu = styled.div`
  margin-top: 1.25rem;
  height: 5rem;
  width: 3.25rem;
  background-color: white;
  border: 1px solid #dadce0;
  border-radius: 8px;
  position: absolute;
  top: ${(props) => props.menuPos};
  right: -4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: top 1s, transform 1.5s;
`;

const MenuBtn = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Opac = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  background-color: transparent;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), transparent);
  opacity: 1;
`;

export default NewGoogleForm;

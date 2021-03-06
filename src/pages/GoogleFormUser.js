import React, { useState, useEffect, useCallback } from "react";
import * as Sentry from "@sentry/react";

import { db } from "../firebase";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  FormContainer,
  FormCenter,
  UserDefaultTitle,
  UserDefaultSubTitle,
  TopBoxWrapper,
  FormBox,
  UserDefaultRed,
  FormBoxTop,
} from "../styles/Form";
import { v4 as uuidv4 } from "uuid";
import TextQuestion from "../components/TextQuestion";
import CheckboxQuestion from "../components/CheckboxQuestion";
import RadioQuestion from "../components/RadioQuestion";
import { Layout } from "../styles/Layout";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const GoogleFormUser = () => {
  const { uuid } = useParams();
  const history = useHistory();

  const [question, setQuestion] = useState({});
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState({});
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

  useEffect(() => {
    fetchData(uuid);
  }, []);

  const fetchData = async function (uuid) {
    const ref = db.collection("questions");
    const questionRef = await ref.where("uuid", "==", uuid).get();
    if (questionRef.empty) {
      alert("No Matching documents");
      history.push("/");
    }

    questionRef.forEach((doc) => {
      setQuestion(doc.data());
    });
  };

  // modal ?????????
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const goBack = function () {
    history.push("/");
  };

  const submit = async function () {
    const payload = {
      uidOfQuestion: question.uuid,
      answer: answer,
      uuid: uuidv4(),
    };
    try {
      await db.collection("answers").add(payload);
      alert("????????? ?????????????????????.");
      history.push("/");
    } catch (error) {
      console.log(error);
      Sentry.captureException(error);

      alert("???????????????.");
    }
  };

  const updateRadioQuestionAnswer = (questionUuid, optionUuid) => {
    const cp = { ...answer };
    cp[questionUuid] = optionUuid;
    setAnswer(cp);
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
            ?????? ?????? ???????????? ????????????. ?????????????????????????
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            ??????
          </Button>
          <Button onClick={goBack} color='primary' autoFocus>
            ????????????
          </Button>
        </DialogActions>
      </Dialog>
      <Opac></Opac>
      <FormContainer>
        <FormCenter>
          <TopBoxWrapper>
            <FormBoxTop>{/* ????????? */}</FormBoxTop>
            <FormBox>
              <UserDefaultTitle>{question.title}</UserDefaultTitle>
              <UserDefaultSubTitle>{question.subtitle}</UserDefaultSubTitle>
              <UserDefaultRed>* ????????????</UserDefaultRed>
            </FormBox>
          </TopBoxWrapper>
          {question.questions &&
            question.questions.map((element, index) => {
              if (element.questionType === "text") {
                return (
                  <TextQuestion
                    key={element.uuid}
                    question={element}
                    updateRadioQuestionAnswer={updateRadioQuestionAnswer}
                  />
                );
              } else if (element.questionType === "radio") {
                return (
                  <RadioQuestion
                    key={element.uuid}
                    question={element}
                    updateRadioQuestionAnswer={updateRadioQuestionAnswer}
                  />
                );
              } else if (element.questionType === "checkbox") {
                return (
                  <CheckboxQuestion
                    key={element.uuid}
                    question={element}
                    updateRadioQuestionAnswer={updateRadioQuestionAnswer}
                  />
                );
              }
            })}
          <SubmitWrapper>
            <SubmitBtn onClick={submit}>??????</SubmitBtn>
          </SubmitWrapper>
        </FormCenter>
      </FormContainer>
    </Layout>
  );
};

const SubmitWrapper = styled.div`
  /* padding: 1rem 0; */
  padding-bottom: 1rem;
`;
const SubmitBtn = styled.div`
  background-color: rgb(103, 58, 183);
  color: white;
  border-radius: 4px;
  font-size: 16px;
  line-height: 36px;
  border: 0;
  padding: 0.25rem 0.75rem;
  width: 5rem;
  text-align: center;
  cursor: pointer;
`;
const Opac = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  background-color: transparent;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), transparent);
  opacity: 1;
`;

export default GoogleFormUser;

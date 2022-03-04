import styled from "styled-components";

// --main-color: #83c9e7;
// --main2-color: #4a88da;
// --main3-color: #82c8e6;
// --background-color: #e4f3fa;
// --red-color: #ff4040;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: #83c9e7; */
  overflow-y: auto;
`;

const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: "dohyeon";
  background-color: rgb(255, 247, 251);
  padding: 2rem;
  border-radius: 15px;
`;

export { Layout, Container };

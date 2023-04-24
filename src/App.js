import React from "react";
import GetImage from "./components/GetImage";
import styled from "styled-components/native";
import { StatusBar } from "react-native";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content"></StatusBar>
      <GetImage />
    </Container>
  );
};
export default App;

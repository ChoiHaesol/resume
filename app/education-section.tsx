import React from "react";
import styled from "styled-components";
import { Divider, SectionTitle } from "./styles";

//#region
const Container = styled.div``;

const ItemWrapper = styled.div`
  margin-bottom: 32px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
  margin: 24px 0 0;
`;

const Period = styled.p`
  color: rgba(155, 155, 155, 1);
`;
//#endregion

const EducationSection = () => {
  return (
    <Container>
      <SectionTitle>📚 Educatioin</SectionTitle>

      <ItemWrapper>
        <Title>서울 남부여성발전센터</Title>
        <Period>2020.06 - 2020.10 총 474시간</Period>
        <p>클라우드기반 웹 개발자 과정</p>
      </ItemWrapper>

      <ItemWrapper>
        <Title>한국 폴리텍대학교 하이테크과정</Title>
        <Period>2019.03 - 2019.11</Period>
        <p>스마트소프트웨어과</p>
      </ItemWrapper>

      <Divider />
    </Container>
  );
};

export default EducationSection;

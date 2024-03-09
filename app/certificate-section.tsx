import React from "react";
import styled from "styled-components";
import { SectionTitle } from "./styles";

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

const CertificateSection = () => {
  return (
    <Container>
      <SectionTitle>🪪 Certificate</SectionTitle>

      <ItemWrapper>
        <Title>정보처리산업기사</Title>
        <Period>2019 / 한국산업인력공단</Period>
      </ItemWrapper>

      <ItemWrapper>
        <Title>컴퓨터활용능력2급</Title>
        <Period>2017 / 대한상공회의소</Period>
      </ItemWrapper>
    </Container>
  );
};

export default CertificateSection;

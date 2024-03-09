import React from "react";
import styled from "styled-components";
import { Divider, SectionTitle } from "./styles";

//#region
const Container = styled.div`
  p {
    font-weight: 600;
  }
`;
//#endregion

const SkillSection = () => {
  return (
    <Container>
      <SectionTitle>🛠️ Skills</SectionTitle>
      <p>
        Next.js, TypeScript, React, HTML/CSS, JavaScript, Styled Component,
        Tailwind CSS, Git
      </p>
      <Divider />
    </Container>
  );
};

export default SkillSection;
